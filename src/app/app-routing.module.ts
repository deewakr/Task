import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 {
   path:'',
   loadChildren:()=>import("./Inventory-mangement/invetory/invetory.module").then(
    (m) => m.InvetoryModule
  ),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
