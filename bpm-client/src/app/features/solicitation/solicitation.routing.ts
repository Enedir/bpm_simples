import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SolicitationListComponent } from './solicitation-list/solicitation-list.component';
import { SolicitationCreatorComponent } from './solicitation-creator/solicitation-creator.component';
import { SolicitationEditComponent } from './solicitation-edit/solicitation-edit.component';
import { SolicitationApproveComponent } from './solicitation-approve/solicitation-approve.component';
import { SolicitationResolveService } from './shrared/solicitation.service';

const solicitationRoutes: Routes = [

    {
        path: '',
        component: SolicitationListComponent,
    },
    {
        path: 'create',
        component: SolicitationCreatorComponent,
        data: {
            breadcrumbOptions: {
                breadcrumbLabel: 'Criar Solicitação',
            },
        },
    },
    {
        path: 'edit/:SolicitationId',
        component: SolicitationCreatorComponent,
        resolve: {
            key: SolicitationResolveService,
        },
        data: {
            breadcrumbOptions: {
                breadcrumbLabel: 'Atualizar Solicitação',
            },
        },
    },
    {
        path: 'approved/:SolicitationId',
        component: SolicitationCreatorComponent,
        resolve: {
            key: SolicitationResolveService,
        },
        data: {
            breadcrumbOptions: {
                breadcrumbLabel: 'Aprovar Solicitação',
            },
        },
    },
]

@NgModule({
    imports: [RouterModule.forChild(solicitationRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class SolicitationRoutingModule {

}