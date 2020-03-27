import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-logotype', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logotype></giotramu-logotype>');

    const element = await page.find('giotramu-logotype');

    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the wrapper styles', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-logotype></giotramu-logotype>');

    const component = await page.find('giotramu-logotype');
    const wrapper = await page.find('giotramu-logotype >>> .wrapper');

    const styles = await wrapper.getComputedStyle();
    expect(styles.width).toEqual('150px');
    expect(styles.fill).toEqual('rgb(0, 0, 0)');

    component.setProperty('size', '480');
    component.setProperty('fillColor', 'digital');

    await page.waitForChanges();

    const freshStyles = await wrapper.getComputedStyle();
    expect(freshStyles.width).toEqual('480px');
    expect(freshStyles.fill).toEqual('rgb(12, 87, 251)');
  });
});
