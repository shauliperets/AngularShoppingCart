import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'details/:id', component: CardDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },

  { path: '', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
