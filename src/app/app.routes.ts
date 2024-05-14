import { Routes } from '@angular/router';
import { ListComponent } from '@products/pages/list/list.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
