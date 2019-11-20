import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { PeopleComponent } from './people/people.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'editprof', component: EditprofileComponent},
  { path : 'prof/blog/:id', component: BlogComponent},
  { path : 'prof', component: ProfileComponent},
  { path : 'post/:id', component: BlogPostComponent},
  { path : 'followers', component: FollowersComponent},
  { path : 'following', component: FollowingComponent},
  { path : 'people/:id', component: PeopleComponent}





];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
