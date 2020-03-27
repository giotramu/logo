import {newE2EPage} from '@stencil/core/testing';

describe('giotramu-monogram', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-monogram></giotramu-monogram>');

    const element = await page.find('giotramu-monogram');

    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the wrapper styles', async () => {
    const page = await newE2EPage();

    await page.setContent('<giotramu-monogram></giotramu-monogram>');

    const component = await page.find('giotramu-monogram');
    const wrapper = await page.find('giotramu-monogram >>> .wrapper');

    const styles = await wrapper.getComputedStyle();
    expect(styles.width).toEqual('50px');
    expect(styles.fill).toEqual('rgb(0, 0, 0)');

    component.setProperty('size', '348');
    component.setProperty('fillColor', 'digital');

    await page.waitForChanges();

    const freshStyles = await wrapper.getComputedStyle();
    expect(freshStyles.width).toEqual('348px');
    expect(freshStyles.fill).toEqual('rgb(12, 87, 251)');
  });
});
