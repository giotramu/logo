import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-typo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-typo></giotramu-typo>');

    const typo = await page.find('giotramu-typo');

    expect(typo).toHaveClass('hydrated');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-typo></giotramu-typo>');

    const component = await page.find('giotramu-typo');
    const wrp = await page.find('giotramu-typo >>> .wrapper');

    expect(wrp.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(wrp.getAttribute('e2e-width')).toBe('480px');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-typo></giotramu-typo>');

    const component = await page.find('giotramu-typo');
    const svg = await page.find('giotramu-typo >>> .vector');

    expect(svg.getAttribute('fill')).toBe('#0072ff');

    component.setProperty('fillColor', 'light-high');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#e1eaee');
  });
});
