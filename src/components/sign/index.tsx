import {Component, Host, Prop, h} from '@stencil/core';
import {HexCode, Size} from '../../typings/props';
import {calcPercentage, getHexCode} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: 'giotramu-sign',
  styleUrl: './styles.css'
})
export class Sign {
  @Prop() size = '100%';
  @Prop() fillColor = 'accent-high';

  render(): SVGElement {
    const fill = this.getFillColor();
    const width = this.getSize();
    const paddingBottom = calcPercentage({
      width: 290, // Viewbox width
      height: 345 // Viewbox height
    });

    return (
      <Host>
        <div class="wrapper" style={{width}} data-width={width}>
          <svg
            class="vector"
            fill={fill}
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 290 345"
            style={{
              paddingBottom
            }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M218.868 81.052c-23.444 20.088-38.302 49.924-38.302 83.234 0 60.488 48.995 109.524 109.434 109.524v-38.334c-39.285 0-71.132-31.873-71.132-71.19V81.052z" />
            <path d="M180.566 37.238h38.302v164.286h-38.302z" />
            <path d="M182.208 73.381c20.247 0 36.66-16.427 36.66-36.69C218.868 16.427 202.455 0 182.208 0c-.551 0-1.098.012-1.642.036v73.309c.544.024 1.091.036 1.642.036z" />
            <path d="M180.566 54.762H290v38.333H180.566z" />
            <path d="M218.868 235.476c0 60.488-48.995 109.524-109.434 109.524-28.653 0-54.733-11.021-74.241-29.058l29.967-24.743c12.15 9.682 27.536 15.468 44.274 15.468 39.285 0 71.132-31.873 71.132-71.191 0-11.878-2.906-23.076-8.046-32.921l29.968-24.745c10.384 16.748 16.38 36.506 16.38 57.666z" />
            <path d="M109.434 54.762C48.995 54.762 0 103.797 0 164.286 0 224.774 48.995 273.81 109.434 273.81s109.434-49.036 109.434-109.524c0-33.31-14.858-63.146-38.302-83.234v83.234c0 39.317-31.847 71.19-71.132 71.19-39.285 0-71.132-31.873-71.132-71.19 0-39.318 31.847-71.19 71.132-71.19V54.761z" />
          </svg>
        </div>
      </Host>
    );
  }

  private getSize(): Size {
    return this.size;
  }

  private getFillColor(): HexCode {
    return getHexCode(this.fillColor);
  }
}
