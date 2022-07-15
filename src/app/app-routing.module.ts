import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/invoice-form/invoice-form.module').then(
                (m) => m.InvoiceFormModule
            ),
    },
    {
        path: 'preview',
        loadChildren: () =>
            import('./features/invoice-preview/invoice-preview.module').then(
                (m) => m.InvoicePreviewModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
