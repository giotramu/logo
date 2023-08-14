import type { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'webc',
  sourceMap: false,
  outputTargets: [
    {
      type: 'dist',
      empty: true,
      dir: 'lib/webc',
      isPrimaryPackageOutputTarget: true
    },
    {
      type: 'www',
      empty: true,
      serviceWorker: null // Disable service workers
    }
  ],
  testing: {
    browserHeadless: 'new'
  },
  validatePrimaryPackageOutputTarget: true
}
