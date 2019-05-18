import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators'

import { environment } from './../../../../environments/environment';
import { Solicitation, SolicitationCommandRegister, SolicitationCommandUpdate, SolicitationCommandApprove } from './solicitation.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class SolicitationService {

    private baseUrl: string;

    constructor(private _http: HttpClient) {
        this.baseUrl = environment.url;
    }

    public delete(id: number): Observable<any> {

        return this._http.delete<any>(`${this.baseUrl}/solicitation/${id}`);
    }

    public get(id: number): Observable<Solicitation> {

        return this._http.get<Solicitation>(`${this.baseUrl}/solicitation/${id}`);
    }

    public getAll(): Observable<Solicitation[]> {

        return this._http.get<Solicitation[]>(`${this.baseUrl}/solicitation/getall`);
    }

    public post(commad: SolicitationCommandRegister): Observable<any> {
        return this._http.post(`${this.baseUrl}/solicitation/`, commad);
    }

    public put(commad: SolicitationCommandUpdate): Observable<any> {
        return this._http.put(`${this.baseUrl}/solicitation/`, commad);
    }

    public patch(commad: SolicitationCommandApprove): Observable<any> {
        return this._http.patch(`${this.baseUrl}/solicitation/`, commad);
    }

}

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class SolicitationResolveService implements Resolve<Solicitation> {

    constructor(private service: SolicitationService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Solicitation> | Observable<never> {

        const solicitationId = Number(route.params['SolicitationId']);

        return this.service.get(solicitationId).pipe(catchError(error => {
            return EMPTY
        }), mergeMap(solicitation => {
            if (solicitation) {
                return of(solicitation)
            } else {
                return EMPTY;
            }
        })
        )
    }
}