const defaultState = {
  pictureData: {},
};

export default (state = defaultState, action) => {
  const newState = state;
  switch (action.type) {
    case 'showModal':
      newState.pictureData = action.pictureData;
      return newState;
    case 'hideModal':
      newState.pictureData = {};
      return newState;
    default:
  }
  return state;
};
