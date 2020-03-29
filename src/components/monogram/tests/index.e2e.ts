import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-monogram', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-monogram></giotramu-monogram>');
    const element = await page.find('giotramu-monogram');
    expect(element).toHaveClass('hydrated');
  });

  it('reflects changes to the attributes', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-monogram></giotramu-monogram>');

    const component = await page.find('giotramu-monogram');
    const wrp = await page.find('giotramu-monogram >>> .wrapper');
    const svg = await page.find('giotramu-monogram >>> .vector');

    expect(wrp.getAttribute('e2e-width')).toBe('100%');
    expect(svg.getAttribute('fill')).toBe('#000');

    component.setProperty('size', '348px');
    component.setProperty('fillColor', 'digital');
    await page.waitForChanges();

    expect(wrp.getAttribute('e2e-width')).toBe('348px');
    expect(svg.getAttribute('fill')).toBe('#0C57FB');
  });
});
