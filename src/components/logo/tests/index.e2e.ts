import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const logo = await page.find('giotramu-logo');

    expect(logo).toHaveClass('hydrated');
  });

  it('renders column attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const logo = await page.find('giotramu-logo >>> .logo');
    expect(logo.getAttribute('data-align')).toBe('row');

    component.setProperty('column', true);
    await page.waitForChanges();

    expect(logo.getAttribute('data-align')).toBe('column');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const element = await page.find('giotramu-logo >>> .logo');
    expect(element.getAttribute('data-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('data-width')).toBe('480px');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logo></giotramu-logo>');

    const component = await page.find('giotramu-logo');
    const sign = await page.find('giotramu-logo >>> .sign');
    const typo = await page.find('giotramu-logo >>> .typo');

    expect(sign.getAttribute('fill-color')).toBe('accent-high');
    expect(typo.getAttribute('fill-color')).toBe('accent-high');

    component.setProperty('fillColor', 'base-high');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('base-high');
    expect(typo.getAttribute('fill-color')).toBe('base-high');
  });
});
