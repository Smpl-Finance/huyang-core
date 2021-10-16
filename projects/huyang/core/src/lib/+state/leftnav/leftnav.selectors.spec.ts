import { Entity, LeftnavState } from './leftnav.reducer';
import { leftnavQuery } from './leftnav.selectors';

describe('Leftnav Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLeftnavId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createLeftnav = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      leftnav: {
        list: [
          createLeftnav('PRODUCT-AAA'),
          createLeftnav('PRODUCT-BBB'),
          createLeftnav('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Leftnav Selectors', () => {
    it('getAllLeftnav() should return the list of Leftnav', () => {
      const results = leftnavQuery.getAllLeftnav(storeState);
      const selId = getLeftnavId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedLeftnav() should return the selected Entity', () => {
      const result = leftnavQuery.getSelectedLeftnav(storeState);
      const selId = getLeftnavId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = leftnavQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = leftnavQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
