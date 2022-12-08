const fs = require('fs');
const path = require('path');
const os = require('os');
const prettier = require('prettier');
const { capitalize, get, lowerCase, kebabCase, upperFirst } = require('lodash');

const parseDescription = (description) =>
  description ? description.replace(/(<([^>]+)>)/gi, '') : '';

const parseComponentName = (componentName) =>
  lowerCase(componentName)
    .split(' ')
    .map((t) => capitalize(t))
    .join(' ');

const parseTypes = (type) => {
  return type
    ? {
        name: get(type, 'names', []).join(' \\| ')
      }
    : null;
};

const getCustomTag = (schemaProps, tagName) => {
  const customTags = get(schemaProps, 'customTags', []);
  const tag = customTags.find((tag) => tag.tag === tagName);

  return tag ? tag.value : null;
};

const getPackageName = (componentPath) => {
  return componentPath.replace(/packages\/(.*)\/src\/(.*)/g, '$1');
};

const getComponentParsed = (componentPath, schemaProps, isSubComponent) => {
  const packageName = getPackageName(componentPath);
  const displayName = get(schemaProps, 'name');
  const displayNameJoined = lowerCase(displayName).replace(/ /g, '');
  const fileName = path.basename(componentPath);
  const partialPath = `${path.basename(path.parse(componentPath).dir, fileName)}/${fileName}`;
  const diffPath = componentPath.replace(partialPath, '');
  const categories = diffPath.replace(new RegExp(`packages/${packageName}/src/(.*)/`), '$1');
  const [categoryRoot, ...restCategories] = categories.split('/');
  const restCategoriesJoined = restCategories.length ? `-${restCategories.join('-')}` : '';
  const componentType = { ui: 'components', contexts: 'providers' };
  const storiesPrefixId =
    categories !== diffPath
      ? `${get(componentType, categoryRoot)}${restCategoriesJoined}-${displayNameJoined}`
      : `${packageName}-${displayNameJoined}`;

  return {
    componentPath,
    partialPath,
    storiesPath: componentPath.replace(
      path.parse(componentPath).ext,
      `.stories${path.parse(componentPath).ext}`
    ),
    displayName,
    description: parseDescription(get(schemaProps, 'description')),
    fileName,
    packageName,
    categories: categories !== diffPath ? restCategories : [],
    storiesPrefixId: !isSubComponent
      ? storiesPrefixId
      : storiesPrefixId.replace(`-${displayNameJoined}`, '')
  };
};

const getStories = (componentPath, schemaProps, componentPathParent) => {
  const { storiesPrefixId, storiesPath } = getComponentParsed(
    componentPath,
    schemaProps,
    !!componentPathParent
  );
  const stories = {};

  try {
    const component = fs.readFileSync(storiesPath).toString();
    const storyRegex = /export const (.*) = /g;
    let match;

    while ((match = storyRegex.exec(component)) !== null) {
      const storyName = match[1];
      const id = kebabCase(storyName);
      const label = lowerCase(storyName)
        .split(' ')
        .map((t) => upperFirst(t))
        .join(' ');

      stories[storyName] = {
        name: storyName,
        label,
        id: `${storiesPrefixId}--${id}`
      };
    }
    return stories;
  } catch (error) {
    throw error;
  }
};

const parseJSONSchemaProps = (schemaProps, requiredProp = true) => {
  const { name, type, description, defaultvalue, optional } = schemaProps;

  return {
    defaultValue: defaultvalue ? { value: defaultvalue } : null,
    description: parseDescription(description),
    name,
    required: requiredProp && !optional,
    type: parseTypes(type)
  };
};

const parseComponentCardProps = (componentPath, schemaProps) => {
  const { displayName, description, storiesPrefixId } = getComponentParsed(
    componentPath,
    schemaProps
  );

  return {
    title: displayName,
    description,
    kind: storiesPrefixId
  };
};

const writeFile = (filePath, content, parser) => {
  fs.writeFileSync(
    filePath,
    prettier.format(content, {
      parser,
      semi: true,
      tabWidth: 2,
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'none',
      bracketSameLine: true
    })
  );
};

const writeIntroduction = (introPath, content, template) => {
  const heading = "[//]: # 'AUTO-GENERATED-CONTENT:START'";
  const footer = "[//]: # 'AUTO-GENERATED-CONTENT:END'";

  const regexpContent =
    /(\.*)\n\[\/\/\]: # 'AUTO-GENERATED-CONTENT:START'(\s+|\n{1,}(.*\n){1,})\[\/\/\]: # 'AUTO-GENERATED-CONTENT:END'\n(\.*)/g;
  const intro = content.replace(
    regexpContent,
    `$1${os.EOL}${heading}${os.EOL}${template}${os.EOL}${footer}$3`
  );

  writeFile(introPath, intro, 'mdx');
};

module.exports = {
  getComponentParsed,
  getCustomTag,
  getStories,
  parseDescription,
  parseTypes,
  parseComponentName,
  parseJSONSchemaProps,
  parseComponentCardProps,
  writeFile,
  writeIntroduction
};
