import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logo></giotramu-logo>');
    const element = await page.find('giotramu-logo');
    expect(element).toHaveClass('hydrated');
  });

  it('reflects changes to the attributes', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const element = await page.find('giotramu-logo >>> .logo');
    const monogram = await page.find('giotramu-logo >>> .monogram');
    const logotype = await page.find('giotramu-logo >>> .logotype');

    expect(element.getAttribute('align-items')).toBe('row');
    expect(element.getAttribute('e2e-width')).toBe('100%');
    expect(monogram.getAttribute('fill-color')).toBe(null);
    expect(logotype.getAttribute('fill-color')).toBe(null);

    component.setProperty('size', '480px');
    component.setProperty('column', true);
    component.setProperty('fillColor', 'silver');
    await page.waitForChanges();

    expect(element.getAttribute('align-items')).toBe('column');
    expect(element.getAttribute('e2e-width')).toBe('480px');
    expect(monogram.getAttribute('fill-color')).toBe('silver');
    expect(logotype.getAttribute('fill-color')).toBe('silver');
  });
});
