import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FindComponent } from './components/find/find.component';
import { CreateComponent } from './components/create/create.component';
import { BannerComponent } from './components/banner/banner.component';

export const routes: Routes = [
    {path:'',component:BannerComponent},
    {path:'table',component:TableComponent},
    {path:'find',component:FindComponent},
    {path:'create',component:CreateComponent}
];
