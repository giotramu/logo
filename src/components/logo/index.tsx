// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, h } from "@stencil/core";
import {LogoSize, LogoStyle} from '../../typings/props';
import {handleSize} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: "giotramu-logo",
  styleUrl: "./styles.css"
})
export class Logo {
  @Prop() size?: LogoSize;
  @Prop() fillColor?: LogoStyle;

  render(): Element {
    const width = this.getSize();

    return (
      <div class="logo" style={{ width }} data-width-e2e={width}>
        <giotramu-monogram class="monogram" fill-color={this.fillColor} />
        <giotramu-logotype class="logotype" fill-color={this.fillColor} />
      </div>
    );
  }

  private getSize(): string {
    return handleSize(this.size);
  }
}
