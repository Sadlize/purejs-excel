import { TABLE_RESIZE, CHANGE_TEXT } from 'redux/types';

export const actionTableResize = (data) => ({
  type: TABLE_RESIZE,
  data,
});

export function actionChangeText(data) {
  return {
    type: CHANGE_TEXT,
    data,
  };
}
