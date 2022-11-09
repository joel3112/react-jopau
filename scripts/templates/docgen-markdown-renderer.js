/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-empty-function */
const path = require('path');
const os = require('os');

let typeFlatteners = {};

const escape = (s) => {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/\t/g, '\\t')
    .replace(/\n/g, '\\n')
    .replace(/\u00A0/g, '\\u00A0')
    .replace(/&/g, '\\x26')
    .replace(/'/g, '\\x27')
    .replace(/"/g, '\\x22');
  // .replace(/</g, '\\x3C')
  // .replace(/>/g, '\\x3E');
};

const normalizeValue = (value) =>
  value && typeof value === 'string' ? escape(value.replace(new RegExp(os.EOL, 'g'), ' ')) : value;

const flattenProp = (seed, currentObj, name, isImmediateNesting) => {
  let typeObject;
  if (currentObj.type && typeof currentObj.type.name === 'string') {
    typeObject = currentObj.type;

    // Parse collection types
    const arrayRegex = /Array.<(.*)>/g;
    if (typeObject.name.match(arrayRegex)) {
      const matches = arrayRegex.exec(typeObject.name);
      typeObject.name = `${matches[1]}[]`;
    }
  } else if (typeof currentObj.name === 'string') {
    typeObject = currentObj;
  } else if (typeof currentObj === 'string') {
    typeObject = { name: currentObj };
  } else {
    // This is just a safeguard, shouldn't happen though.
    throw new Error(`Unknown object type found for ${name}, check the source code and try again.`);
  }
  /* $lab:coverage:on$ */

  (typeFlatteners[typeObject.name] || (() => {}))(seed, typeObject, name);

  if (!isImmediateNesting) {
    seed[name] = Object.assign({}, currentObj, {
      type: { ...typeObject },
      description: normalizeValue(currentObj.description),
      defaultValue: normalizeValue(currentObj.defaultValue && currentObj.defaultValue.value)
    });
  }
};

typeFlatteners = {
  arrayOf(seed, arrayType, name) {
    flattenProp(seed, arrayType.value, name + '[]', true);
  },
  shape(seed, shapeType, name) {
    Object.keys(shapeType.value).forEach((inner) => {
      flattenProp(seed, shapeType.value[inner], name + '.' + inner);
    });
  },
  objectOf(seed, objectOfType, name) {
    flattenProp(seed, objectOfType.value, name + '[#]', true);
  },
  union(seed, unionType, name) {
    if (typeof unionType.value === 'string') {
      return;
    }

    unionType.value.forEach((type, index) => {
      flattenProp(seed, type, name + `<${index + 1}>`);
    });
  }
};

const flattenProps = (props) => {
  const sortedProps = {};
  if (props) {
    const flattenedProps = Object.keys(props).reduce((seed, prop) => {
      flattenProp(seed, props[prop], prop);
      return seed;
    }, {});

    Object.keys(flattenedProps)
      .sort()
      .forEach((key) => {
        sortedProps[key] = flattenedProps[key];
      });
  }

  return sortedProps;
};

class DocgenMarkdownRenderer {
  options;
  extension;

  constructor({ template }) {
    this.options = {
      template
    };

    this.extension = '.md';
  }

  /**
   * @typedef {Object} SchemaPropData
   * @property {Object.<string, *>} [defaultValue] - The default value of the prop
   * @property {string} description - The description of the prop
   * @property {string} name - The name of the prop
   * @property {Array.<Object.<string, *>>} [declarations] - The declarations of the prop
   * @property {boolean} [required] - Whether the prop is required
   * @property {Object.<string, string>} type - The types of the prop
   */
  /**
   * @typedef {Object.<string, SchemaPropData>} SchemaProps
   */
  /**
   * @typedef {Object} SchemaDoc
   * @property {Object} [tags] - The tags of the component
   * @property {string} [filePath] - The file path of the component
   * @property {string} description - The description of the component
   * @property {string} displayName - The display name of the component
   * @property {string} imports - The imports of the component
   * @property {Array.<*>} [methods] - The methods of the component
   * @property {string[]} [examples] - The examples of the component
   * @property {SchemaProps} [props] - The props of the component
   * @property {SchemaProps} [stories] - The stories of the component
   * @property {SchemaProps} [params] - The params of the component
   * @property {SchemaProps} [returns] - The returns of the component
   */
  /**
   * @param   {string} filePath - The file path of the component
   * @param   {SchemaDoc} docs - The docs template data
   * @returns {string} The rendered markdown
   */
  render(filePath, docs) {
    return this.options.template.instantiate(
      {
        componentName: docs.displayName,
        componentPath: path.basename(filePath, path.extname(filePath)),
        description: docs.description,
        imports: docs.imports,
        examples: docs.examples,
        props: flattenProps(docs.props),
        params: flattenProps(docs.params),
        returns: flattenProps(docs.returns),
        stories: docs.stories
      },
      this.extension
    );
  }
}

module.exports = DocgenMarkdownRenderer;
