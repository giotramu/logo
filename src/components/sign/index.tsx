import {Component, Prop, h} from '@stencil/core';
import {Size, FillStyle} from '../../typings/props';
import {calcPercentage, handleColor, handleSize} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: 'giotramu-sign',
  styleUrl: './styles.css'
})
export class Sign {
  @Prop() size: Size;
  @Prop() fillColor: FillStyle;

  render(): SVGElement {
    const fill = this.getFillColor();
    const width = this.getSize();
    const paddingBottom = calcPercentage({width: 265, height: 315});

    return (
      <div class="wrapper" style={{width}} e2e-width={width}>
        <svg
          class="vector"
          fill={fill}
          preserveAspectRatio="xMidYMin slice"
          viewBox="0 0 265 315"
          style={{
            paddingBottom
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 215c0 55.228-44.772 100-100 100-26.183 0-50.015-10.062-67.841-26.531l27.383-22.592A64.725 64.725 0 00100 280c35.899 0 65-29.102 65-65 0-10.845-2.656-21.07-7.353-30.059l27.386-22.593C194.521 177.64 200 195.68 200 215z" />
          <path d="M165 34h35v150h-35z" />
          <path d="M100 50C44.772 50 0 94.772 0 150s44.772 100 100 100 100-44.772 100-100c0-30.413-13.577-57.655-35-75.996V150c0 35.899-29.101 65-65 65-35.898 0-65-29.101-65-65 0-35.898 29.102-65 65-65V50z" />
          <path d="M200 74.004c-21.423 18.341-35 45.583-35 75.996 0 55.228 44.772 100 100 100v-35c-35.899 0-65-29.102-65-65V74.004z" />
          <path d="M166.5 67c18.502 0 33.5-14.998 33.5-33.5C200 14.998 185.002 0 166.5 0c-.503 0-1.003.011-1.5.033v66.934c.497.022.997.033 1.5.033z" />
          <path d="M165 50h100v35H165z" />
        </svg>
      </div>
    );
  }

  private getSize(): string {
    return handleSize(this.size);
  }

  private getFillColor(): string {
    return handleColor(this.fillColor);
  }
}
