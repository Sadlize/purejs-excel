import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
} from 'redux/types';

const value = (state, key, action) => {
  const val = state[key] || {};
  val[action.data.id] = action.data.value;
  return val;
};

function rootReducer(state, action) {
  let key;
  let val;
  switch (action.type) {
    case TABLE_RESIZE:
      key = action.data.resizerType === 'col' ? 'colState' : 'rowState';
      return {
        ...state,
        [key]: value(state, key, action),
      };
    case CHANGE_TEXT:
      key = 'dataState';
      return {
        ...state,
        currentText: action.data.value,
        [key]: value(state, key, action),
      };
    case CHANGE_STYLES:
      return {
        ...state,
        currentStyles: action.data,
      };
    case APPLY_STYLE:
      key = 'stylesState';
      val = state[key] || {};
      action.data.ids.forEach((id) => {
        val[id] = { ...val[id], ...action.data.value };
      });
      return {
        ...state,
        [key]: val,
        currentStyles: { ...state.currentStyles, ...action.data.value },
      };
    default:
      return state;
  }
}

export default rootReducer;
