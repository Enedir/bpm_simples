import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'solicitation',
                pathMatch: 'full',
            },
            {
                path: 'solicitation',
                loadChildren: './features/solicitation/solicitation.module#SolicitationModule',
                data: {
                    breadcrumbOptions: {
                        breadcrumbLabel: 'Compras',
                    },
                },
            },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        paramsInheritanceStrategy: 'always',
    })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
