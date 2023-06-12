import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
} from 'redux/types';

export const actionTableResize = (data) => ({
  type: TABLE_RESIZE,
  data,
});

export const actionChangeText = (data) => ({
  type: CHANGE_TEXT,
  data,
});

export const actionChangeStyles = (data) => ({
  type: CHANGE_STYLES,
  data,
});

export const actionApplyStyle = (data) => ({
  type: APPLY_STYLE,
  data,
});
