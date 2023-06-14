import { defaultStyles, defaultSpreadsheetTitle } from 'src/constants';

const defaultState = {
  spreadsheetTitle: defaultSpreadsheetTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
});

const clone = (obj) => JSON.parse(JSON.stringify(obj));

const normalizeInitialState = (state) =>
  state ? normalize(state) : clone(defaultState);

export default normalizeInitialState;
