import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import Gallery from '../../../../src/components/gallery/Gallery.vue';

Vue.use(Vuex);

const mockBeer = {
  title: 'Brand Dubbelbock',
  images: [
    {
      image: 'https://www.beerwulf.com/globalassets/brand-dubbelbock.3_1_1.png',
      badge: {
        url: '/',
        alt: null,
        title: null,
      },
    },
  ],
  colors: ['yellow', 'malt', 'brown'],
  inStock: true,
  style: 'Bock Beer',
  alcoholPercentage: 7.5,
  volume: 30,
  displayInformationPrice: {
    currency: '£',
    price: '£ 2.39',
    filterPrice: 1.7925,
    discountPrice: '£ 1.79',
    discountPercentage: '-25',
    pricePerLiter: '£ 7.97',
  },
  containerType: 'Bottle',
};

const store = new Vuex.Store({
  modules: {
    menu: {
      namespaced: true,
      state: {
        appData: [mockBeer],
        filteredAppData: [mockBeer],
        title: mockBeer.title,
        style: mockBeer.style,
        color: mockBeer.colors[0],
        titleSelected: false,
        styleSelected: false,
        colorSelected: false,
      },
    },
  },
});

describe('Gallery test', () => {
  test('SHOULD render default WHEN normally instantiated', () => {
    const wrapper = shallowMount(Gallery, {
      store,
    });

    expect(wrapper).toMatchSnapshot();
  });
});
