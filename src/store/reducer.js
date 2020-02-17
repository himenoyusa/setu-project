const defaultState = {
  visible: false,
  data: {},
};

export default (state = defaultState, action) => {
  const newState = state;
  switch (action.type) {
    case 'showModal':
      newState.visible = true;
      newState.data = action.data;
      return newState;
    case 'hideModal':
      newState.visible = false;
      return newState;
    default:
  }
  return state;
};
