import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Cards } from './pages/cards/cards';
import { Headers } from './pages/headers/headers';
import { Alerts } from './pages/alerts/alerts';
import { Buttons } from './pages/buttons/buttons';
import { Form } from './pages/form/form';
import { Tables } from './pages/tables/tables';
import { Modals } from './pages/modals/modals';
import { Charts } from './pages/charts/charts';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'alerts', component: Alerts },
    { path: 'buttons', component: Buttons },
    { path: 'cards', component: Cards },
    { path: 'headers', component: Headers },
    { path: 'form', component: Form },
    { path: 'tables', component: Tables },
    { path: 'modals', component: Modals },
    { path: 'charts', component: Charts },
    { path: 'login', component: Login },
];
