/* eslint-disable react/no-unknown-property */

import {Component, Host, Prop, h} from '@stencil/core';
import type {HexCode, Size} from '../../types';
import {hexCode} from '../../utils';

@Component({
  shadow: true,
  tag: 'giotramu-sign',
  styleUrl: 'styles.css'
})
export class Sign {
  @Prop() size = '100%';

  @Prop() fillColor?: string;

  render(): SVGElement {
    const fill = this.getFillColor();

    const width = this.getSize();

    const svgWidth = 400;

    const svgHeight = 400;

    return (
      <Host>
        <div class="sign" style={{width}}>
          <svg
            fill={fill}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.944 128C128.414 128.03 98 158.463 98 196c0 37.555 30.445 68 68 68 36.213 0 65.814-28.306 67.884-64H234v-72h-68.056Z" />
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M0 0h400v400H0V0Zm234 96V40.284a28.229 28.229 0 0 1 3.994-.284h.012C253.467 40.003 266 52.538 266 68v28h68v32h-68v72h.116c2.07 35.694 31.671 64 67.884 64v32c-26.455 0-50.511-10.273-68.395-27.047C261.076 319.987 218.211 360 166 360c-25.954 0-49.599-9.888-67.373-26.102l25.447-20.357C135.626 322.599 150.182 328 166 328c34.161 0 62.439-25.19 67.271-58.009C215.509 286.15 191.905 296 166 296c-55.228 0-100-44.772-100-100 0-54.895 44.232-99.459 99-99.995V96h69Z"
            />
          </svg>
        </div>
      </Host>
    );
  }

  private getSize(): Size {
    return this.size;
  }

  private getFillColor(): HexCode | 'black' {
    return this.fillColor ? hexCode(this.fillColor) : 'black';
  }
}
