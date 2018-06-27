import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post/post-list/post-list.component";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { HomeComponent } from "./home/home.component"
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'postcreate', component: PostCreateComponent },
    { path: 'postlist', component: PostListComponent },
    { path: 'home', component: HomeComponent }
];
export const Routing = RouterModule.forRoot(APP_ROUTES);