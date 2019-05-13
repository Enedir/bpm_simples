import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

import { environment } from './../../../../environments/environment';
import { Solicitation, SolicitationCommandRegister, SolicitationCommandUpdate } from './solicitation.model';
import { Resolve, Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { take, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SolicitationService {

    private baseUrl: string;

    constructor(private _http: HttpClient) {
        this.baseUrl = environment.url;
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

    public get(id: number): Observable<Solicitation> {

        return this._http.get<Solicitation>(`${this.baseUrl}/solicitation/${id}`);
    }
}

@Injectable()
export class SolicitationResolveService implements Resolve<any> {

    constructor(private service: SolicitationService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        return this.service.get(route.params['SolicitationId']).pipe(catchError(error => {
            return EMPTY
        }), mergeMap(something => {
            if (something) {
                return of(something)
            } else {
                return EMPTY;
            }
        })
        )
    }
}