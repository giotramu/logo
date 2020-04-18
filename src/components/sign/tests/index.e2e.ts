import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-sign', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-sign></giotramu-sign>');

    const sign = await page.find('giotramu-sign');

    expect(sign).toHaveClass('hydrated');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-sign></giotramu-sign>');

    const component = await page.find('giotramu-sign');
    const wrp = await page.find('giotramu-sign >>> .wrapper');

    expect(wrp.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '348px');
    await page.waitForChanges();

    expect(wrp.getAttribute('e2e-width')).toBe('348px');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-sign></giotramu-sign>');

    const component = await page.find('giotramu-sign');
    const svg = await page.find('giotramu-sign >>> .vector');

    expect(svg.getAttribute('fill')).toBe('#000');

    component.setProperty('fillColor', 'accent');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#0c57fb');
  });
});
