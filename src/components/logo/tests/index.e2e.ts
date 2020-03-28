import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logo></giotramu-logo>');
    const element = await page.find('giotramu-logo');
    expect(element).toHaveClass('hydrated');
  });

  // it('reflects changes to the component attributes', async () => {
  //   const page = await newE2EPage();

  //   await page.setContent('<giotramu-logo></giotramu-logo>');

  //   const component = await page.find('giotramu-logo');
  //   const wrp = await page.find('giotramu-logo >>> .logo');
  //   const monogram = await page.find('giotramu-logo >>> .monogram');
  //   const logotype = await page.find('giotramu-logo >>> .logotype');

  //   expect(wrp.getAttribute('data-width-e2e')).toBe('100%');
  //   expect(monogram.getAttribute('fill-color')).toBe('#000');
  //   expect(logotype.getAttribute('fill-color')).toBe('#000');

  //   component.setProperty('size', '480px');
  //   component.setProperty('fill-color', 'digital');
  //   await page.waitForChanges();

  //   expect(wrp.getAttribute('data-width-e2e')).toBe('480px');
  //   expect(monogram.getAttribute('fill-color')).toBe('#0C57FB');
  //   expect(logotype.getAttribute('fill-color')).toBe('#0C57FB');
  // });
});
