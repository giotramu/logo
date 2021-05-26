import {newSpecPage} from '@stencil/core/testing';
import {Logo} from '../index';

describe('giotramu-logo', () => {
  it('renders logo with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo>
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 100%;"
            data-width="100%"
            data-align="row"
          >
            <giotramu-sign class="sign" fill-color="accent-high"></giotramu-sign>
            <giotramu-typo class="typo" fill-color="accent-high"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('renders logo with a predefined color', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo fill-color="light-high"></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo fill-color="light-high">
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 100%;"
            data-width="100%"
            data-align="row"
          >
            <giotramu-sign class="sign" fill-color="light-high"></giotramu-sign>
            <giotramu-typo class="typo" fill-color="light-high"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('renders logo with custom color', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo fill-color="#e1ef"></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo fill-color="#e1ef">
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 100%;"
            data-width="100%"
            data-align="row"
          >
            <giotramu-sign class="sign" fill-color="#e1ef"></giotramu-sign>
            <giotramu-typo class="typo" fill-color="#e1ef"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('renders logo with vertical alignment', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo column></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo column>
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 100%;"
            data-width="100%"
            data-align="column"
          >
            <giotramu-sign class="sign" fill-color="accent-high"></giotramu-sign>
            <giotramu-typo class="typo" fill-color="accent-high"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('renders logo with a custom size', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo size="320px"></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo size="320px">
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 320px;"
            data-width="320px"
            data-align="row"
          >
            <giotramu-sign class="sign" fill-color="accent-high"></giotramu-sign>
            <giotramu-typo class="typo" fill-color="accent-high"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });
});
