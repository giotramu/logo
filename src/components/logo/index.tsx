import {Component, Host, Prop, h} from '@stencil/core';
import type {Alignment, Size} from '../../types';

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
      <Host>
        <div class="logo" style={{width}} data-width={width} data-align={align}>
          <giotramu-sign class="sign" fill-color={fillColor} />
          <giotramu-typo class="typo" fill-color={fillColor} />
        </div>
      </Host>
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
