import 'styles/normalize.scss';
import 'styles/globals.scss';
import 'styles/_fonts.scss';
import 'styles/header.scss';
import './styles/table.scss';
import './styles/dashboard.scss';
import Router from 'core/routes/Router';
import DashboardPage from 'pages/DashboardPage';
import { app } from 'src/constants';
import ExcelPage from 'pages/ExcelPage';

const router = new Router(app, {
  dashboard: DashboardPage,
  excel: ExcelPage,
});

router.init();
