import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'contactus', component: ContactusComponent},
    {path:'products',component:ProductsComponent},
    {path:'login', component: LoginComponent},
    {path:'footer' , component:FooterComponent}
];
