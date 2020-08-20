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

  getAnimes(pageLimit?: number, pageOffset?: number): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      let url = `${environment.API_ANIME_BASE_PATH}/anime?`;

      if (pageLimit) {
        url += `&page[limit]=${pageLimit}`;
      }

      if (pageOffset) {
        url += `&page[offset]=${pageOffset}`;
      }

      this.http.get<ApiResponse>(url).subscribe(data => {
        resolve(data);
      });
    });
  }

  getSearchAnime(searchText: string): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      const url = `${environment.API_ANIME_BASE_PATH}/anime?filter[text]=${searchText}`;
      this.http.get<ApiResponse>(url).subscribe(data => {
        resolve(data);
      });
    });
  }

}
