import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { ArticlesPageComponent } from './features/articles/pages/articles-page/articles-page.component';
import { WritingPageComponent } from './features/articles/pages/writing-page/writing-page.component';
import { PricingPageComponent } from './features/pricing/pages/pricing-page/pricing-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent }, 
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'start-writing', component: WritingPageComponent},
  { path: 'pricing', component: PricingPageComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
