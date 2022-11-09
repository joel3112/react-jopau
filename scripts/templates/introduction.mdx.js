const os = require('os');

const templateObject = (items) => `
${items
  .map(({ title, description, kind }) => {
    return `<SBCard title="${title}" kind="${kind}">${description}</SBCard>`;
  })
  .join(os.EOL)}
`;

module.exports = templateObject;
