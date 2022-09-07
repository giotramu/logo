import {Component, Host, Prop, h} from '@stencil/core';
import type {Alignment, Size} from '../../types';

@Component({
  shadow: true,
  tag: 'giotramu-logo',
  styleUrl: 'styles.css'
})
export class Logo {
  @Prop() column = false;

  @Prop() size = '100%';

  @Prop() color?: string;

  render(): Element {
    const color = this.getColor();

    const width = this.getSize();

    const align = this.getAlignment();

    return (
      <Host>
        <div class="logo" style={{width}} data-align={align}>
          <giotramu-sign class="sign" color={color} />
          <giotramu-typo class="typo" color={color} />
        </div>
      </Host>
    );
  }

  private getAlignment(): Alignment {
    return this.column ? 'column' : 'row';
  }

  private getSize(): Size {
    return this.size;
  }

  private getColor(): string | undefined {
    return this.color;
  }
}
