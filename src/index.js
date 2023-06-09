import 'styles/normalize.scss';
import 'styles/globals.scss';
import 'styles/header.scss';
import './styles/table.scss';

import LayoutComponent from 'components';
import Container from 'components/modules/header/Container';
import Toolbar from 'components/modules/header/Toolbar';
import Formula from 'components/modules/header/Formula';
import Table from 'components/modules/table';
import createStore from 'core/createStore';
import rootReducer from 'redux/rootReducer';
import { storage } from 'utils/helpers';
import initialState from 'redux/initialState';

const store = createStore(rootReducer, initialState);
store.subscribe((state) => {
  storage('excel-state', state);
});

const app = '#app';
const excelHeader = new LayoutComponent(app, {
  children: [Container, Toolbar, Formula],
  store,
});
const excelTable = new LayoutComponent(app, {
  children: [Table],
  store,
});

excelHeader.render('header', 'header');
excelTable.render('main');
