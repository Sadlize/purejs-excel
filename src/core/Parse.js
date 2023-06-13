// eslint-disable-next-line import/no-unresolved
import { evaluate } from 'mathjs';

function formulaParse(value = '') {
  if (value.startsWith('=')) {
    try {
      return evaluate(value.slice(1));
    } catch (e) {
      console.warn('Skipping parse error', e);
    }
  }

  return value;
}

export default formulaParse;
