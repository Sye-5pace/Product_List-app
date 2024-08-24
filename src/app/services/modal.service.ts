import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private modalSubject = new BehaviorSubject<boolean>(false);
  modalState$: Observable<boolean> = this.modalSubject.asObservable();

  constructor() { }

  openModal(): void {
    this.modalSubject.next(true);
  }

  closeModal(): void {
    this.modalSubject.next(false);
  }
}
