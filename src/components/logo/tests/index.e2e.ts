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
    expect(logo.getAttribute('align-items')).toBe('row');

    component.setProperty('column', true);
    await page.waitForChanges();

    expect(logo.getAttribute('align-items')).toBe('column');
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
    const sign = await page.find('giotramu-logo >>> .sign');
    const typo = await page.find('giotramu-logo >>> .typo');

    expect(sign.getAttribute('fill-color')).toBe(null);
    expect(typo.getAttribute('fill-color')).toBe(null);

    component.setProperty('fillColor', 'gray');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('gray');
    expect(typo.getAttribute('fill-color')).toBe('gray');
  });
});
