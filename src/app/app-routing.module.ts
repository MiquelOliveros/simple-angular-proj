import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { InitComponent } from './init/init.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {path: '', component: InitComponent},
  {path: 'placeholder', component: PlaceholderComponent},
  {path: 'comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
