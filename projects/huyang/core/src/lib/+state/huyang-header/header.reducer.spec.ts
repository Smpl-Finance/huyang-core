import {HeaderState, initialState, reducer} from './header.reducer';
import {HeaderLoad} from './header.actions';

describe('Header Reducer', () => {
  const getHeaderId = it => it.id;
  // let createHeader;

  beforeEach(() => {
    // createHeader = (id: string, name = ''): Entity => ({
    //   id,
    //   name: name || `name-${id}`
    // });
  });

  describe('valid Header actions ', () => {
    it('should return set the list of known Header', () => {
      const headers = [
        // createHeader('PRODUCT-AAA'),
        // createHeader('PRODUCT-zzz')
      ];
      // const action = new HeaderLoad(headers);
      // const result: HeaderState = reducer(initialState, action);
      // const selId: string = getHeaderId((result as any).list[1]);
      //
      // expect(result.loaded).toBe(true);
      // expect(result.list.length).toBe(2);
      // expect(selId).toBe('PRODUCT-zzz');
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
