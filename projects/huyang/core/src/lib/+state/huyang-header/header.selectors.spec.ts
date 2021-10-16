import { Entity, HeaderState } from './header.reducer';
import { headerQuery } from './header.selectors';

describe('Header Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHeaderId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createHeader = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      header: {
        list: [
          createHeader('PRODUCT-AAA'),
          createHeader('PRODUCT-BBB'),
          createHeader('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Header Selectors', () => {
    it('getAllHeader() should return the list of Header', () => {
      const results = headerQuery.getAllHeader(storeState);
      const selId = getHeaderId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedHeader() should return the selected Entity', () => {
      const result = headerQuery.getSelectedHeader(storeState);
      const selId = getHeaderId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = headerQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = headerQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
