import { LeftnavLoaded } from './leftnav.actions';
import { LeftnavState, Entity, initialState, reducer } from './leftnav.reducer';

describe('Leftnav Reducer', () => {
  const getLeftnavId = it => it['id'];
  let createLeftnav;

  beforeEach(() => {
    createLeftnav = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Leftnav actions ', () => {
    it('should return set the list of known Leftnav', () => {
      const leftnavs = [
        createLeftnav('PRODUCT-AAA'),
        createLeftnav('PRODUCT-zzz')
      ];
      const action = new LeftnavLoaded(leftnavs);
      const result: LeftnavState = reducer(initialState, action);
      const selId: string = getLeftnavId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
