import { SharedModule } from './../../shared/shared.module';
import { SolicitationRoutingModule } from './solicitation.routing';

import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
        SolicitationRoutingModule
    ],
    declarations: [

    ],
    providers: [

    ]
})

export class SolicitationModule {

}