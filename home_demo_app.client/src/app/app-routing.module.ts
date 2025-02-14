import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/login/login.component";
import { RegisterComponent } from './register/register.component';
import { OwnerComponent } from './owner/owner.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { AdminComponent } from './admin/admin.component';
import { GetusersComponent } from './getusers/getusers.component';
import { SuspendedusersComponent } from './suspendedusers/suspendedusers.component';
import { ViewlistingadminComponent } from './viewlistingadmin/viewlistingadmin.component';
import { TenantComponent } from './tenant/tenant.component';
import { ApplicationsubmitComponent } from './applicationsubmit/applicationsubmit.component';
import { ViewappsubmissionComponent } from './viewappsubmission/viewappsubmission.component';
import { OwnerLayoutComponent } from './layout/owner-layout/owner-layout.component';
import { TenantLayoutComponent } from './layout/tenant-layout/tenant-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ApplicationstatusComponent } from './applicationstatus/applicationstatus.component';
import { AcceptedapplicationsComponent } from './acceptedapplications/acceptedapplications.component';
import { ViewpendingappsownerComponent } from './viewpendingappsowner/viewpendingappsowner.component';
import { ViewappsadminComponent } from './viewappsadmin/viewappsadmin.component';
import { ViewacceptappsownerComponent } from './viewacceptappsowner/viewacceptappsowner.component';
import { LocatesuggestComponent } from './locatesuggest/locatesuggest.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: 'view-listing', component: ViewListingComponent },
  { path: 'add-listing/:propertyId', component: AddListingComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'getusers', component: GetusersComponent },
  { path: 'suspendedusers', component: SuspendedusersComponent },
  { path: 'viewlistingadmin', component: ViewlistingadminComponent },
  { path: 'tenant', component: TenantComponent },
  { path: 'viewappsubmission', component: ViewappsubmissionComponent },
  { path: 'applicationsubmit/:id', component: ApplicationsubmitComponent },
  { path: 'viewappsubmission/:id', component: ViewappsubmissionComponent },
  { path: 'admin-layout', component: AdminLayoutComponent },
  { path: 'owner-layout', component: OwnerLayoutComponent },
  { path: 'tenant-layout', component: TenantLayoutComponent },
  { path: 'tenant/:filterType', component: TenantComponent },
  { path: 'applicationstatus', component: ApplicationstatusComponent },
  { path: 'acceptedapplications', component: AcceptedapplicationsComponent },
  { path: 'viewpendingappsowner', component: ViewpendingappsownerComponent },
  { path: 'viewappsadmin', component: ViewappsadminComponent },
  { path: 'viewacceptappsowner', component: ViewacceptappsownerComponent },
  {path:'locatesuggest',component:LocatesuggestComponent}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', 
  onSameUrlNavigation: 'reload' 
};
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
