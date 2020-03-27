// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, h } from "@stencil/core";
import {LogoSize, LogoStyle} from '../../typings/props';
import {handleSize, pxUnit} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: "giotramu-logo",
  styleUrl: "./style.css"
})
export class Logo {
  @Prop() size?: LogoSize;
  @Prop() fillColor?: LogoStyle;

  render(): Element {
    const width = pxUnit(this.getSize());

    return (
      <div class="logo" style={{ width }}>
        <giotramu-monogram size="100%" fillColor={this.fillColor} />
        <giotramu-logotype size="100%" fillColor={this.fillColor} />
      </div>
    );
  }

  private getSize(): string {
    const defaultSize = 600;
    return handleSize({size: this.size, defaultSize});
  }
}
