import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logotype', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logotype></giotramu-logotype>');
    const element = await page.find('giotramu-logotype');
    expect(element).toHaveClass('hydrated');
  });

  it('reflects changes to the attributes', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logotype></giotramu-logotype>');

    const component = await page.find('giotramu-logotype');
    const wrp = await page.find('giotramu-logotype >>> .wrapper');
    const svg = await page.find('giotramu-logotype >>> .vector');

    expect(wrp.getAttribute('e2e-width')).toBe('100%');
    expect(svg.getAttribute('fill')).toBe('#000');

    component.setProperty('size', '480px');
    component.setProperty('fillColor', 'digital');
    await page.waitForChanges();

    expect(wrp.getAttribute('e2e-width')).toBe('480px');
    expect(svg.getAttribute('fill')).toBe('#0C57FB');
  });
});
