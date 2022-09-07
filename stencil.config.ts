import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'giotramu-logo',

  outputTargets: [
    {
      /**
       * The dist type is to generate the component(s)
       * as a reusable library that can be self-lazy loading.
       */
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      /**
       * The `dist-custom-elements-bundle` output target
       * is used to generate custom elements as a single bundle.
       */
      type: 'dist-custom-elements'
    },
    {
      /**
       * The www output target type is oriented for webapps and websites,
       * hosted from an http server for demo purposes.
       */
      type: 'www',
      serviceWorker: null // Disable service workers
    }
  ]
};
