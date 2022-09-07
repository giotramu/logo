import {newSpecPage} from '@stencil/core/testing';
import {Logo} from '../index';

describe('giotramu-logo', () => {
  it('should render the logo', async () => {
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
            data-align="row"
          >
            <giotramu-sign class="sign"></giotramu-sign>
            <giotramu-typo class="typo"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('should render the logo with a vertical alignment', async () => {
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
            data-align="column"
          >
            <giotramu-sign class="sign"></giotramu-sign>
            <giotramu-typo class="typo"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('should render the logo with a custom size', async () => {
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
            data-align="row"
          >
            <giotramu-sign class="sign"></giotramu-sign>
            <giotramu-typo class="typo"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('renders logo the logo with an accent color', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo color="accent"></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo color="accent">
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 100%;"
            data-align="row"
          >
            <giotramu-sign class="sign" color="accent"></giotramu-sign>
            <giotramu-typo class="typo" color="accent"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });

  it('should render the logo with a custom color', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<giotramu-logo color="#EFEF"></giotramu-logo>'
    });

    expect(root).toEqualHtml(`
      <giotramu-logo color="#EFEF">
        <mock:shadow-root>
          <div
            class="logo"
            style="width: 100%;"
            data-align="row"
          >
            <giotramu-sign class="sign" color="#EFEF"></giotramu-sign>
            <giotramu-typo class="typo" color="#EFEF"></giotramu-typo>
          </div>
        </mock:shadow-root>
      </giotramu-logo>
    `);
  });
});
