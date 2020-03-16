import { fromJS } from 'immutable';

const INIT_MODAL = 'initModal';
const SHOW_MODAL = 'showModal';
const HIDE_MODAL = 'hideModal';

const defaultState = fromJS({
  pictureData: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case INIT_MODAL:
      return state.set('visible', true);
    case SHOW_MODAL:
      return state.set('pictureData', action.pictureData);
    case HIDE_MODAL:
      return state.set('visible', false).set('pictureData', {});
    default:
  }
  return state;
};

export const pictureActions = {
  getShowModalAction: (pictureData) => ({
    type: SHOW_MODAL,
    pictureData,
  }),
  getInitModalAction: () => ({
    type: INIT_MODAL,
  }),
  hideModalAction: () => ({
    type: HIDE_MODAL,
  }),
};
