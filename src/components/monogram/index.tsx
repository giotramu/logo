// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, Prop, h} from '@stencil/core';
import {LogoSize, LogoStyle} from '../../typings/props';
import {
  pxUnit,
  handleColor,
  handleSize,
  calcPadding,
} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: 'giotramu-monogram',
  styleUrl: './style.css',
})
export class Monogram {
  @Prop() size?: LogoSize;
  @Prop() fillColor: LogoStyle;

  render(): SVGElement {
    const fill = this.getFillColor();
    const width = pxUnit(this.getSize());
    const paddingBottom = pxUnit(calcPadding({width: 265, height: 315}));

    return (
      <div style={{width, fill}} class="wrapper">
        <svg
          class="vector"
          width="100%"
          viewBox="0 0 265 315"
          style={{
            paddingBottom,
          }}
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="inherit"
            d="M165 0.0947266C165.825 0.0319595 166.659 0 167.5 0C185.282 0 199.729 14.2813 199.996 32L200 50H265V85H200V150C200 185.898 229.102 215 265 215V250C239.925 250 217.005 240.771 199.453 225.524C194.194 275.806 151.674 315 100 315C73.8174 315 49.9849 304.938 32.1589 288.469L59.5425 265.877C70.6446 274.717 84.7054 280 100 280C131.828 280 158.314 257.123 163.91 226.915C146.581 241.331 124.303 250 100 250C44.7715 250 0 205.228 0 150C0 94.7715 44.7715 50 100 50V85C64.1015 85 35 114.102 35 150C35 185.898 64.1015 215 100 215C135.898 215 165 185.898 165 150V0.0947266Z"
          />
        </svg>
      </div>
    );
  }

  private getSize(): string {
    const defaultSize = 50;
    return handleSize({size: this.size, defaultSize});
  }

  private getFillColor(): string {
    return handleColor(this.fillColor);
  }
}
