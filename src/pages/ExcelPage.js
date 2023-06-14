import Page from 'core/Page';
import LayoutComponent from 'components';
import Container from 'components/modules/header/Container';
import Toolbar from 'components/modules/header/Toolbar';
import Formula from 'components/modules/header/Formula';
import Table from 'components/modules/table';
import createStore from 'core/createStore';
import rootReducer from 'redux/rootReducer';
import { storage, debounce } from 'utils/helpers';
import normalizeInitialState from 'redux/initialState';

const getStateKey = (name, id) => `${name}:${id}`;

class ExcelPage extends Page {
  getRoot() {
    const [stateName, stateID] = this.params;
    const stateKey = getStateKey(stateName, stateID);
    const storeState = storage(stateKey);
    const store = createStore(rootReducer, normalizeInitialState(storeState));

    const stateListener = debounce((state) => {
      storage(`${stateKey}`, state);
    }, 300);

    store.subscribe(stateListener);

    this.excel = new LayoutComponent({
      children: [Container, Toolbar, Formula, Table],
      store,
    });

    return this.excel.getRoot();
  }

  afterRender() {
    this.excel.init();
  }

  destroy() {
    this.excel.destroy();
  }
}

export default ExcelPage;
