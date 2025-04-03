import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {TemperaturComponent} from "../../temperatur/temperatur.component";
import {LuftqualitaetComponent} from "../../luftqualitaet/luftqualitaet.component";
import {LuftfeuchtigkeitComponent} from "../../luftfeuchtigkeit/luftfeuchtigkeit.component";
import {LuftdruckComponent} from "../../luftdruck/luftdruck.component";

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'temperatur',     component: TemperaturComponent },
    { path: 'luftfeuchtigkeit',        component: LuftfeuchtigkeitComponent },
    { path: 'luftdruck',        component: LuftdruckComponent },
    { path: 'luftqualitaet',        component: LuftqualitaetComponent },

];
