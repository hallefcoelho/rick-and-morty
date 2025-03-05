import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { map, Observable } from "rxjs";

export class BaseService<T> {
  private http = inject(HttpClient);

  constructor(private apiUrl: string, private mapper: (data: any) => T[]) {}

  getAll(): Observable<T[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => this.mapper(response.results)));
  }

  getById(id: number | string): Observable<T> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((response) => this.mapper(response)[0]));
  }

  create(item: T): Observable<T> {
    return this.http.post<any>(this.apiUrl, item).pipe(
      map((response) => this.mapper(response.results)[0]));
  }

  update(id: number | string, item: T): Observable<T> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item).pipe(
      map((response) => this.mapper(response.results)[0]));
  }

  delete(id: number | string): Observable<T> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      map((response) => this.mapper(response)[0])
    );
  }
}
