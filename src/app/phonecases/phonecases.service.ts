//phonecases.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Phonecases } from './phonecases.module';
@Injectable({
  providedIn: 'root'
})
export class PhonecasesService {

  private phonecasesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public phonecases$: Observable<any[]> = this.phonecasesSubject.asObservable();

  constructor(private http: HttpClient) { }

  addPhonecases(newPhonecases: any): void {
    const currentPhonecases = this.phonecasesSubject.getValue();
    this.phonecasesSubject.next([...currentPhonecases, newPhonecases]);
  }

  removePhonecase(id: number): void {
    const currentPhonecases = this.phonecasesSubject.getValue();
    this.phonecasesSubject.next(currentPhonecases.filter(phonecase => phonecase.id !== id));
  }

  postPhonecases(phonecases: Phonecases) {
    console.log("postPhonecases was called")
    return this.http
      .post('/api/phonecase', phonecases)
      .pipe(
        tap((newPhonecases: any) => {
          this.addPhonecases(newPhonecases);
        })
      );
  }

  getPhonecases() {
    return this.http.get<Phonecases[]>('/api/phonecase');
  }

  deletePhonecase(id: number) {
    return this.http.delete(`/api/phonecase/${id}`)
  }
}
