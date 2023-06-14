import Page from 'core/Page';
import LayoutComponent from 'components';
import Container from 'components/modules/header/Container';
import Toolbar from 'components/modules/header/Toolbar';
import Formula from 'components/modules/header/Formula';
import Table from 'components/modules/table';
import createStore from 'core/createStore';
import rootReducer from 'redux/rootReducer';
import { storage, debounce } from 'utils/helpers';
import initialState from 'redux/initialState';

class ExcelPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState);

    const stateListener = debounce((state) => {
      storage('excel-state', state);
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
