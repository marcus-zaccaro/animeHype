import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAnimes(): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      const url = `${environment.API_BASE_PATH}/anime?`;

      this.http.get<ApiResponse>(url).subscribe(data => {
        resolve(data);
      });
    });
  }

}
