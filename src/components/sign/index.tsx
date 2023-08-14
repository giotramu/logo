import { Component, Host, Prop, h } from '@stencil/core'
import type { HexCode, Size } from 'src/commons/types'
import { getHexCode } from 'src/commons/utils'

@Component({
  shadow: true,
  tag: 'giotramu-sign',
  styleUrl: 'styles.css'
})
export class Sign {
  @Prop() public size = '100%'

  @Prop() public color?: string

  protected render(): SVGElement {
    const width = this.getSize()

    const colorName = this.color

    const colorCode = this.getColor()

    return (
      <Host>
        <div class="sign" style={{ width, color: colorCode }}>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            {colorName === 'accent' ? (
              <g>
                <path fill="currentColor" d="M0 0h400v400H0z" />
                <path
                  fill={getHexCode('base-100')}
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M234 96h-69v.0049C110.232 96.5414 66 141.105 66 196c0 55.228 44.772 100 100 100 25.905 0 49.509-9.85 67.271-26.009C228.439 302.81 200.161 328 166 328c-15.818 0-30.374-5.401-41.926-14.459l-25.4472 20.357C116.401 350.112 140.046 360 166 360c52.211 0 95.076-40.013 99.605-91.047C283.489 285.727 307.545 296 334 296v-32c-36.213 0-65.814-28.306-67.884-64H266v-72h68V96h-68V68c0-15.464-12.536-28-28-28-1.358 0-2.694.0967-4 .2836V96Zm0 32h-68.056C128.414 128.03 98 158.463 98 196c0 37.555 30.445 68 68 68 36.213 0 65.814-28.306 67.884-64H234v-72Z"
                />
              </g>
            ) : (
              <path
                fill="currentColor"
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M0 0h400v400H0V0Zm234 96V40.2836c1.306-.1869 2.642-.2836 4-.2836 15.464 0 28 12.536 28 28v28h68v32h-68v72h.116c2.07 35.694 31.671 64 67.884 64v32c-26.455 0-50.511-10.273-68.395-27.047C261.076 319.987 218.211 360 166 360c-25.954 0-49.599-9.888-67.3732-26.102l25.4472-20.357C135.626 322.599 150.182 328 166 328c34.161 0 62.439-25.19 67.271-58.009C215.509 286.15 191.905 296 166 296c-55.228 0-100-44.772-100-100 0-54.895 44.232-99.4585 99-99.9951V96h69Zm-68.056 32C128.414 128.03 98 158.463 98 196c0 37.555 30.445 68 68 68 36.213 0 65.814-28.306 67.884-64H234v-72h-68.056Z"
              />
            )}
          </svg>
        </div>
      </Host>
    )
  }

  private getSize(): Size {
    return this.size
  }

  private getColor(): HexCode {
    return getHexCode(this.color)
  }
}
