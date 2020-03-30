import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logotype', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logotype></giotramu-logotype>');

    const element = await page.find('giotramu-logotype');

    expect(element).toHaveClass('hydrated');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logotype></giotramu-logotype>');

    const component = await page.find('giotramu-logotype');
    const element = await page.find('giotramu-logotype >>> .wrapper');

    expect(element.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('e2e-width')).toBe('480px');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<giotramu-logotype></giotramu-logotype>');

    const component = await page.find('giotramu-logotype');
    const element = await page.find('giotramu-logotype >>> .vector');

    expect(element.getAttribute('fill')).toBe('#000');

    component.setProperty('fillColor', 'digital');
    await page.waitForChanges();

    expect(element.getAttribute('fill')).toBe('#0C57FB');
  });
});
