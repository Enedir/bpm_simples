import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SolicitationRoutingModule } from './solicitation.routing';
import { SolicitationService, SolicitationResolveService } from './shared/solicitation.service';
import { SolicitationListComponent } from './solicitation-list/solicitation-list.component';
import { SolicitationApproveComponent } from './solicitation-approve/solicitation-approve.component';
import { SolicitationCreatorComponent } from './solicitation-creator/solicitation-creator.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    SolicitationRoutingModule,
  ],
  declarations: [SolicitationListComponent, SolicitationApproveComponent, SolicitationCreatorComponent],
  providers: [
    SolicitationService,
    SolicitationResolveService,
  ]
})
export class SolicitationModule { }
