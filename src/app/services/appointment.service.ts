import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/appointment';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }
}
