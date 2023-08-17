const { AutoComplete, Input, Select, Toggle } = require('enquirer');

const promptInput = async (message, defaultValue, format) => {
  return new Input({
    message,
    initial: defaultValue,
    format
  }).run();
};

const promptSelect = async (message, choices) => {
  return new Select({
    message,
    choices
  }).run();
};

const promptToggle = async (message) => {
  return new Toggle({
    message,
    enabled: 'Yes',
    disabled: 'No'
  }).run();
};

const promptAutoComplete = async (message, choices) => {
  return new AutoComplete({
    message,
    limit: 10,
    choices
  }).run();
};

module.exports = {
  promptAutoComplete,
  promptInput,
  promptSelect,
  promptToggle
};
