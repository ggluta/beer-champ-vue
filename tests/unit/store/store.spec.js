import store from '../../../src/store/modules/menu';

const beerMockOne = {
  title: 'Kompaan Bondgenoot',
  images: [
    {
      image: 'https://www.beerwulf.com/globalassets/kompaan-bondgenoot.33_1_1.png',
      badge: {
        url:
            'https://www.beerwulf.com/en-gb/SysSiteAssets/editorials/dutch-beer-challenge-2018/dbc-silver.png',
        alt: 'Dutch Beer Challenge Silver',
        title: 'Dutch Beer Challenge Silver',
      },
    },
  ],
  colors: ['yellow'],
  inStock: true,
  style: 'Pale Ale',
  alcoholPercentage: 5.2,
  volume: 33,
  displayInformationPrice: {
    currency: '£',
    price: '£ 2.79',
    filterPrice: 2.0925,
    discountPrice: '£ 2.09',
    discountPercentage: '-25',
    pricePerLiter: '£ 8.45',
  },
  containerType: 'Bottle',
};
const beerMockTwo = {
  title: 'Brand Weizen 0.0',
  images: [
    {
      image: 'https://www.beerwulf.com/globalassets/brand-weizen-0.0.3_1_1.png',
      badge: {
        url: '/',
        alt: null,
        title: null,
      },
    },
  ],
  colors: ['yellow'],
  inStock: true,
  style: 'German Wheat Beer',
  alcoholPercentage: 0,
  volume: 30,
  displayInformationPrice: {
    currency: '£',
    price: '£ 1.79',
    filterPrice: 1.3425,
    discountPrice: '£ 1.34',
    discountPercentage: '-25',
    pricePerLiter: '£ 5.97',
  },
  containerType: 'Bottle',
};
const beerMockThree = {
  title: 'La Débauche Saison',
  images: [
    {
      image: 'https://www.beerwulf.com/globalassets/la-debauche-saison_2_1.png',
      badge: {
        url: '/',
        alt: null,
        title: null,
      },
    },
  ],
  colors: ['malt', 'brown'],
  inStock: true,
  style: 'Saison Beer',
  alcoholPercentage: 7,
  volume: 33,
  displayInformationPrice: {
    currency: '£',
    price: '£ 2.99',
    filterPrice: 2.691,
    discountPrice: '£ 2.69',
    discountPercentage: '-10',
    pricePerLiter: '£ 9.06',
  },
  containerType: 'Bottle',
};

describe('Store test mutations', () => {
  it('SHOULD initialize data sources WHEN loaded', () => {
    const data = ['obj1', 'obj2'];
    const state = {
      appData: [],
      filteredAppData: [],
    };

    store.mutations.setAppData(state, data);

    expect(state)
      .toEqual({
        appData: [...data],
        filteredAppData: [...data],
      });
  });

  it('SHOULD set title and filter data accordingly WHEN setTitle mutation is called', () => {
    const title = 'Kompaan Bondgenoot';
    const state = {
      filteredAppData: [beerMockOne, beerMockTwo, beerMockThree],
      title: '',
      titleSelected: false,
    };

    store.mutations.setTitle(state, title);

    expect(state.title).toEqual(title);
    expect(state.titleSelected).toBe(true);
    expect(state.filteredAppData).toEqual([beerMockOne]);
  });

  it('SHOULD reset title and filter data accordingly WHEN resetTitle mutation is called', () => {
    const state = {
      appData: [beerMockOne, beerMockTwo, beerMockThree],
      filteredAppData: [beerMockOne],
      title: 'Kompaan Bondgenoot',
      titleSelected: true,
    };

    store.mutations.resetTitle(state);

    expect(state.title).toEqual('');
    expect(state.titleSelected).toBe(false);
    expect(state.filteredAppData).toEqual([beerMockOne, beerMockTwo, beerMockThree]);
  });

  it('SHOULD set style and filter data accordingly WHEN setStyle mutation is called', () => {
    const style = 'Pale Ale';
    const state = {
      filteredAppData: [beerMockOne, beerMockTwo, beerMockThree],
      style: '',
      styleSelected: false,
    };

    store.mutations.setStyle(state, style);

    expect(state.style).toEqual(style);
    expect(state.styleSelected).toBe(true);
    expect(state.filteredAppData).toEqual([beerMockOne]);
  });

  it('SHOULD reset style and filter data accordingly WHEN resetStyle mutation is called', () => {
    const state = {
      appData: [beerMockOne, beerMockTwo, beerMockThree],
      filteredAppData: [beerMockOne],
      style: 'Pale Ale',
      styleSelected: true,
    };

    store.mutations.resetStyle(state);

    expect(state.style).toEqual('');
    expect(state.styleSelected).toBe(false);
    expect(state.filteredAppData).toEqual([beerMockOne, beerMockTwo, beerMockThree]);
  });

  it('SHOULD set color and filter data accordingly WHEN setColor mutation is called', () => {
    const color = 'yellow';
    const state = {
      filteredAppData: [beerMockOne, beerMockTwo, beerMockThree],
      color: '',
      styleSelected: false,
    };

    store.mutations.setColor(state, color);

    expect(state.color).toEqual(color);
    expect(state.colorSelected).toBe(true);
    expect(state.filteredAppData).toEqual([beerMockOne, beerMockTwo]);
  });

  it('SHOULD reset color and filter data accordingly WHEN resetColor mutation is called', () => {
    const state = {
      appData: [beerMockOne, beerMockTwo, beerMockThree],
      filteredAppData: [beerMockOne],
      color: 'yellow',
      styleSelected: true,
    };

    store.mutations.resetColor(state);

    expect(state.color).toEqual('');
    expect(state.colorSelected).toBe(false);
    expect(state.filteredAppData).toEqual([beerMockOne, beerMockTwo, beerMockThree]);
  });
});

describe('Store test getters', () => {
  it('SHOULD get correct color data WHEN queried', () => {
    const state = {
      filteredAppData: [
        { colors: ['yellow', 'malt', 'brown'] },
        { colors: ['yellow'] },
        { colors: ['light yellow'] },
        { colors: ['malt', 'brown'] },
      ],
    };

    const actual = store.getters.getColors(state);

    expect(actual)
      .toEqual(['yellow', 'malt', 'brown', 'light yellow']);
  });

  it('SHOULD get correct styles data WHEN queried', () => {
    const state = {
      filteredAppData: [
        { style: 'Bock Beer' },
        { style: 'Saison Beer' },
        { style: 'Lager' },
        { style: 'Cider' },
      ],
    };

    const actual = store.getters.getStyles(state);

    expect(actual)
      .toEqual(['Bock Beer', 'Saison Beer', 'Lager', 'Cider']);
  });

  it('SHOULD get correct titles data WHEN queried', () => {
    const state = {
      filteredAppData: [
        { title: 'New Castle Brown Ale' },
        { title: 'Brewdog Hazy Jane' },
        { title: 'Strongbow Dark Fruit' },
      ],
    };

    const actual = store.getters.getTitles(state);

    expect(actual)
      .toEqual(['New Castle Brown Ale', 'Brewdog Hazy Jane', 'Strongbow Dark Fruit']);
  });

  it('SHOULD get correct images data WHEN queried', () => {
    const state = {
      filteredAppData: [
        { images: [{ image: '/path_to_img_1' }] },
        { images: [{ image: '/path_to_img_2' }] },
      ],
    };

    const actual = store.getters.getImages(state);

    expect(actual)
      .toEqual(['/path_to_img_1', '/path_to_img_2']);
  });
});

describe('Store test actions', () => {
  it('SHOULD initialize application data WHEN initialize action is dispatched', async () => {
    // given
    const commit = jest.fn();
    const payload = ['obj1', 'obj2'];

    // when
    await store.actions.initialize({ commit }, payload);

    // then
    expect(commit).toHaveBeenCalledWith('setAppData', payload);
  });
});
