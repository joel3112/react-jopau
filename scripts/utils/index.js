const fs = require('fs');
const path = require('path');
const os = require('os');
const prettier = require('prettier');
const { capitalize, get, lowerCase } = require('lodash');

const getCustomTag = (customTags, tagName) => {
  const tag = customTags.find((tag) => tag.tag === tagName);
  return tag ? tag.value : null;
};

const getStories = (componentPath, componentName) => {
  const storiesPath = path.join(componentPath, '../') + componentName + '.stories.tsx';
  const stories = {};

  try {
    const component = fs.readFileSync(storiesPath).toString();
    const storyRegex = /export const (.*) = Template.bind\({}\);/g;
    let match;
    while ((match = storyRegex.exec(component)) !== null) {
      const storyName = match[1];
      stories[storyName] = {
        name: storyName
      };
    }
    return stories;
  } catch (error) {
    return null;
  }
};

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

const parseJSONSchemaProps = (prop, requiredProp = true) => {
  const { name, type, description, defaultvalue, optional } = prop;
  return {
    defaultValue: defaultvalue ? { value: defaultvalue } : null,
    description: parseDescription(description),
    name,
    required: requiredProp && !optional,
    type: parseTypes(type)
  };
};

const parseComponentCardProps = (packageName, componentName, props) => {
  return {
    title: get(props, 'name'),
    description: parseDescription(get(props, 'description')),
    kind: `${packageName}-${componentName}`.toLowerCase()
  };
};

const writeFile = (filePath, content) => {
  fs.writeFileSync(
    filePath,
    prettier.format(content, {
      parser: 'mdx',
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

  writeFile(introPath, intro);
};

module.exports = {
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
