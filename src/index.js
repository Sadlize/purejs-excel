import 'styles/normalize.scss';
import 'styles/globals.scss';
import 'styles/header.scss';
import './styles/table.scss';

import LayoutComponent from 'components';
import Container from 'components/modules/header/Container';
import Toolbar from 'components/modules/header/Toolbar';
import Formula from 'components/modules/header/Formula';
import Table from 'components/modules/table';

const excelHeader = new LayoutComponent('#app', {
  children: [Container, Toolbar, Formula],
});

const excelTable = new LayoutComponent('#app', {
  children: [Table],
});

excelHeader.render('header', 'header');
excelTable.render('main');
