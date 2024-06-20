/** @type { import('@storybook/vue3').Preview } */
import '../src/index.css'; //👈 The app's CSS file goes here
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
