import { shallowMount } from '@vue/test-utils';
import LandingPage from '../../../../src/components/landingPage/LandingPage.vue';

describe('Gallery test', () => {
  test('SHOULD render default WHEN normally instantiated', () => {
    const wrapper = shallowMount(LandingPage);

    expect(wrapper).toMatchSnapshot();
  });
});
