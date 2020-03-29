// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, Prop, h} from '@stencil/core';
import {
  LogoSize,
  LogoStyle,
  LogoAlignment,
} from '../../typings/props';
import {handleSize} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: 'giotramu-logo',
  styleUrl: './styles.css',
})
export class Logo {
  @Prop() size: LogoSize;
  @Prop() fillColor: LogoStyle;
  @Prop() column = false;

  render(): Element {
    const width = this.getSize();
    const align = this.getAlignment();
    const fillColor = this.getFillColor();

    return (
      <div
        class="logo"
        style={{width}}
        align-items={align}
        e2e-width={width}
      >
        <giotramu-monogram class="monogram" fill-color={fillColor} />
        <hr class="divider" />
        <giotramu-logotype class="logotype" fill-color={fillColor} />
      </div>
    );
  }

  private getSize(): string {
    return handleSize(this.size);
  }

  private getFillColor(): LogoStyle {
    return this.fillColor;
  }

  private getAlignment(): LogoAlignment {
    return this.column ? 'column' : 'row';
  }
}
