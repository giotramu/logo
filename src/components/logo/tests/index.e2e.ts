import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const element = await page.find('giotramu-logo');
    expect(element).toHaveClass('hydrated');
  });

  it('renders column attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const element = await page.find('giotramu-logo >>> .logo');

    expect(element.getAttribute('align-items')).toBe('row');

    component.setProperty('column', true);
    await page.waitForChanges();

    expect(element.getAttribute('align-items')).toBe('column');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const element = await page.find('giotramu-logo >>> .logo');
    expect(element.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('e2e-width')).toBe('480px');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const monogram = await page.find('giotramu-logo >>> .monogram');
    const logotype = await page.find('giotramu-logo >>> .logotype');

    expect(monogram.getAttribute('fill-color')).toBe(null);
    expect(logotype.getAttribute('fill-color')).toBe(null);

    component.setProperty('fillColor', 'silver');
    await page.waitForChanges();

    expect(monogram.getAttribute('fill-color')).toBe('silver');
    expect(logotype.getAttribute('fill-color')).toBe('silver');
  });
});
