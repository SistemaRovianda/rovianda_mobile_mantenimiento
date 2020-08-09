import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { NewRecord } from "../models/records.interface";

@Injectable({
  providedIn: "root",
})
export class RecordsService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}/maintenance`;
  }

  getRecords(): Observable<[]> {
    return this.http.get<[]>(`${this.url}`);
  }

  newRecord(body: NewRecord): Observable<any> {
    return this.http.post(`${this.url}`, body);
  }
}
