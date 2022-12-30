const os = require('os');

const templateObject = (items) => `
${items
  .map(({ title, description, kind }) => {
    return `<SBCard title="${title}" kind="${kind}">${
      description ? description.replace(/(<([^>]+)>)/gi, '') : ''
    }</SBCard>`;
  })
  .join(os.EOL)}
`;

module.exports = templateObject;
