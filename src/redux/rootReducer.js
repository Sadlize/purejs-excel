import { TABLE_RESIZE, CHANGE_TEXT } from 'redux/types';

function rootReducer(state, action) {
  let prevState;
  let key;
  switch (action.type) {
    case TABLE_RESIZE:
      key = action.data.resizerType === 'col' ? 'colState' : 'rowState';
      prevState = state[key] || {};
      prevState[action.data.id] = action.data.resizeValue;
      return {
        ...state,
        [key]: prevState,
      };
    case CHANGE_TEXT:
      prevState = state.dataState || {};
      prevState[action.data.id] = action.data.value;
      return {
        ...state,
        currentText: action.data.value,
        dataState: prevState,
      };
    default:
      return state;
  }
}

export default rootReducer;
