import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './component/notes/notes.component';
import { PasswordComponent } from './component/password/password.component';


const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'pass', component: PasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
