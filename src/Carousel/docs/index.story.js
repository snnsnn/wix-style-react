import React from 'react';

import Carousel from '..';
import { storySettings } from './storySettings';

const childrenExamples = [
  {
    value: [<div>First</div>, <div>Second</div>, <div>Third</div>],
    label: 'Three nodes',
  },
];

const imagesExamples = [
  {
    value: [
      {
        src:
          'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
      },
      {
        src:
          'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
      },
      {
        src:
          'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
      },
    ],
    label: 'Three images',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Carousel,
  componentPath: '..',

  componentProps: {
    children: childrenExamples[0].value,
    infinite: true,
    autoplay: false,
    dataHook: storySettings.dataHook,
  },

  exampleProps: {
    children: childrenExamples,
    images: imagesExamples,
  },
};
