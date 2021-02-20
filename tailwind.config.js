module.exports = {
  purge: ['.src/**/*.js', '.src/**/*.mdx'],
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
    },
  },
  variants: {
    visibility: ['group-hover'],
  },
};
