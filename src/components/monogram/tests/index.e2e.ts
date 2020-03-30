import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-monogram', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-monogram></giotramu-monogram>');

    const element = await page.find('giotramu-monogram');
    expect(element).toHaveClass('hydrated');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-monogram></giotramu-monogram>');

    const component = await page.find('giotramu-monogram');
    const element = await page.find('giotramu-monogram >>> .wrapper');

    expect(element.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '348px');
    await page.waitForChanges();

    expect(element.getAttribute('e2e-width')).toBe('348px');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-monogram></giotramu-monogram>');

    const component = await page.find('giotramu-monogram');
    const element = await page.find('giotramu-monogram >>> .vector');

    expect(element.getAttribute('fill')).toBe('#000');

    component.setProperty('fillColor', 'digital');
    await page.waitForChanges();

    expect(element.getAttribute('fill')).toBe('#0C57FB');
  });
});
