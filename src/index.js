import './scss/style.scss';
import 'bootstrap';
import { loadBody } from './pages/components/body';
import { changeTab } from './modules/tabs-management';

loadBody();
changeTab('link-home');
