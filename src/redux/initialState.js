import { storage } from 'utils/helpers';

const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  currentText: '',
};

const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState;

export default initialState;
