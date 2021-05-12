import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremierCicleComponent } from './components/premier-cicle.component';
import { SecondCicleComponent } from './components/second-cicle/second-cicle.component';

const routes: Routes = [
   {path: 'premiercicle', component: PremierCicleComponent},
   {path: 'secondcicle', component: SecondCicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const Allroutes = [PremierCicleComponent, SecondCicleComponent];
