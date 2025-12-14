import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Cards } from './pages/cards/cards';
import { Headers } from './pages/headers/headers';
import { Alerts } from './pages/alerts/alerts';
import { Buttons } from './pages/buttons/buttons';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'alerts', component: Alerts },
    { path: 'buttons', component: Buttons },
    { path: 'cards', component: Cards },
    { path: 'headers', component: Headers },
];
