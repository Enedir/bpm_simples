import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SolicitationRoutingModule } from './solicitation.routing';
import { SolicitationService, SolicitationResolveService } from './shared/solicitation.service';
import { SolicitationListComponent } from './solicitation-list/solicitation-list.component';
import { SolicitationApproveComponent } from './solicitation-approve/solicitation-approve.component';
import { SolicitationCreatorComponent } from './solicitation-creator/solicitation-creator.component';

import ptBr from '@angular/common/locales/pt'; // necessário a partir do Angular v5
import { registerLocaleData } from '@angular/common'; // necessário a partir do Angular v5
registerLocaleData(ptBr); // necessário a partir do Angular v5

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
    { provide: LOCALE_ID, useValue: 'pt' } // necessário a partir do Angular v5 pt-BR nao é mais suportado
  ]
})
export class SolicitationModule { }
