import { Component, Host, Prop, h } from '@stencil/core'
import type { Alignment, Size } from 'src/commons/types'

@Component({
  shadow: true,
  tag: 'giotramu-logo',
  styleUrl: 'styles.css'
})
export class Logo {
  @Prop() public column = false

  @Prop() public size = '100%'

  @Prop() public color?: string

  @Prop() public twoTone = false

  protected render(): Element {
    const width = this.getSize()

    const align = this.getAlignment()

    const signColor = this.getSignColor()

    const typoColor = this.getTypoColor()

    return (
      <Host>
        <div class="logo" style={{ width }} data-align={align}>
          <giotramu-sign
            class="sign"
            {...(signColor ? { color: signColor } : {})}
          />
          <giotramu-typo
            class="typo"
            {...(typoColor ? { color: typoColor } : {})}
          />
        </div>
      </Host>
    )
  }

  private getAlignment(): Alignment {
    return this.column ? 'column' : 'row'
  }

  private getSize(): Size {
    return this.size
  }

  private getSignColor(): string | undefined {
    return this.twoTone ? 'accent' : this.color
  }

  private getTypoColor(): string | undefined {
    return this.color
  }
}
