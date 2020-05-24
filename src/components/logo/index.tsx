import {Component, Prop, h} from '@stencil/core';
import {Alignment, Size} from '../../typings/props';

@Component({
  shadow: true,
  tag: 'giotramu-logo',
  styleUrl: './styles.css'
})
export class Logo {
  @Prop() size = '100%';
  @Prop() fillColor = 'accent-high';
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

  private getSize(): Size {
    return this.size;
  }

  private getFillColor(): string {
    return this.fillColor;
  }

  private getAlignment(): Alignment {
    return this.column ? 'column' : 'row';
  }
}
