import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Police } from './police.module';

@Injectable({
    providedIn: 'root',
})
export class PoliceService {
    private policeSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public police$: Observable<any[]> = this.policeSubject.asObservable();

    constructor(private http: HttpClient) { }

    addPolice(newPolice: any): void {
        const currentPolice = this.policeSubject.getValue();
        this.policeSubject.next([...currentPolice, newPolice]);
    }

    postPolice(police: Police) {
        console.log("postPolice was called")
        return this.http
            .post('/api/police', police)
            .pipe(
                tap((newPolice: any) => {
                    this.addPolice(newPolice);
                })
            );
    }

    getPolice() {
        return this.http.get<Police[]>('/api/police');
    }

}