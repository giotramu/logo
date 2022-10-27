import {Component, Host, Prop, h} from '@stencil/core';
import type {Alignment, Size} from 'src/types';

@Component({
  shadow: true,
  tag: 'giotramu-logo',
  styleUrl: 'styles.css'
})
export class Logo {
  @Prop() column = false;

  @Prop() size = '100%';

  @Prop() color?: string;

  @Prop() twoTone = false;

  render(): Element {
    const width = this.getSize();

    const align = this.getAlignment();

    const signColorName = this.getSignColor();

    const typoColorName = this.getTypoColor();

    return (
      <Host>
        <div class="logo" style={{width}} data-align={align}>
          <giotramu-sign class="sign" color={signColorName} />
          <giotramu-typo class="typo" color={typoColorName} />
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

  private getSignColor(): string | undefined {
    return this.twoTone ? 'accent' : this.color;
  }

  private getTypoColor(): string | undefined {
    return this.color;
  }
}
