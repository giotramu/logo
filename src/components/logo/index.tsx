import {Component, Prop, h} from '@stencil/core';
import {Size, FillStyle, Alignment} from '../../typings/props';
import {handleSize} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: 'giotramu-logo',
  styleUrl: './styles.css'
})
export class Logo {
  @Prop() size: Size;
  @Prop() fillColor: FillStyle;
  @Prop() column = false;

  render(): Element {
    const width = this.getSize();
    const align = this.getAlignment();
    const fillColor = this.getFillColor();

    return (
      <div class="logo" style={{width}} align-items={align} e2e-width={width}>
        <giotramu-sign class="sign" fill-color={fillColor} />
        <giotramu-typo class="typo" fill-color={fillColor} />
      </div>
    );
  }

  private getSize(): string {
    return handleSize(this.size);
  }

  private getFillColor(): FillStyle {
    return this.fillColor;
  }

  private getAlignment(): Alignment {
    return this.column ? 'column' : 'row';
  }
}
