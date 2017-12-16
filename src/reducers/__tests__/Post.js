import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

import post from '../Post';

describe('post reducer', () => {
  describe('LIKE_POST_SUCCESS action', () => {
    const action = {
      type: likeTypes.LIKE_POST_SUCCESS,
      response: {
        id: 1,
        metadata: {
          likesCount: 10,
        }
      }
    };

    describe('no state', () => {
      const state = undefined;

      it('doesnt do anything', () => {
        const result = post(state, action);

        expect(result).toEqual({
          isFetching: false,
          error: false,
          validationErrors: {},
          entry: null
        });
      });
    });

    describe('state present, entry with same id', () => {
      const state = {
        entry: {
          id: 1,
          metadata: {
            likesCount: 0
          }
        }
      };

      it('changes likes count', () => {
        const result = post(state, action);

        expect(result).toEqual({
          entry: {
            id: 1,
            metadata: {
              likesCount: 10
            }
          }
        });
      });
    });

    describe('state present, entry with another id', () => {
      const state = {
        entry: {
          id: 99,
          metadata: {
            likesCount: 0
          }
        }
      };

      it('doesnt change likes count', () => {
        const result = post(state, action);

        expect(result).toEqual({
          entry: {
            id: 99,
            metadata: {
              likesCount: 0
            }
          }
        });
      });
    });
  });
});
