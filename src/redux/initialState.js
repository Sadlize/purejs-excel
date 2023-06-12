import { storage } from 'utils/helpers';
import { defaultStyles } from 'src/constants';

const defaultState = {
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

const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState;

export default initialState;
