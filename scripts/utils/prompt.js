const { Input, Select, Toggle } = require('enquirer');

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

module.exports = {
  promptInput,
  promptSelect,
  promptToggle
};
