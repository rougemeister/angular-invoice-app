import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Invoice } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dataUrl = '../../../assets/data/data.json';

  constructor(private http: HttpClient) {}

  async getInvoices(): Promise<Invoice[]> {
    return await firstValueFrom(this.http.get<Invoice[]>(this.dataUrl));
  }
}







