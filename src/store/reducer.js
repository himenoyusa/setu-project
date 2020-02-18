const defaultState = {
  inputValue: '123',
  list: [1, 2],
  visible: false,
};

export default (state = defaultState, action) => {
  if (action.type === 'changeModalState') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.visible = action.value;
    return newState;
  }
  return state;
};
