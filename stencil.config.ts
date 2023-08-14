import type { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'webc',

  sourceMap: false,

  outputTargets: [
    {
      /**
       * The `dist` type is to generate the component(s)
       * as a reusable library that can be self-lazy loading.
       */
      type: 'dist',
      dir: 'lib/webc',
      esmLoaderPath: '../loader'
    },
    {
      /**
       * The `www` output target type is oriented for webapps and websites,
       * hosted from an http server for demo purposes.
       */
      type: 'www',
      serviceWorker: null // Disable service workers
    }
  ],

  testing: {
    browserHeadless: 'new'
  }
}
