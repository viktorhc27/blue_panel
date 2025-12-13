import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Cards } from './pages/cards/cards';
import { Headers } from './pages/headers/headers';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'cards', component: Cards },
    { path: 'headers', component: Headers },
];
