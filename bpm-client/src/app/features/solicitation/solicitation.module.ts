import { SolicitationService, SolicitationResolveService } from './shrared/solicitation.service';
import { SharedModule } from './../../shared/shared.module';
import { SolicitationRoutingModule } from './solicitation.routing';

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SolicitationListComponent } from './solicitation-list/solicitation-list.component';
import { SolicitationFormComponent } from './solicitation-form/solicitation-form.component';
import { SolicitationCreatorComponent } from './solicitation-creator/solicitation-creator.component';
import { SolicitationEditComponent } from './solicitation-edit/solicitation-edit.component';
import { SolicitationApproveComponent } from './solicitation-approve/solicitation-approve.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        SharedModule,
        SolicitationRoutingModule,
    ],
    declarations: [
        SolicitationListComponent,
        SolicitationFormComponent,
        SolicitationCreatorComponent,
        SolicitationEditComponent,
        SolicitationApproveComponent,
    ],
    providers: [
        SolicitationService,
        SolicitationResolveService,
    ]
})

export class SolicitationModule {

}