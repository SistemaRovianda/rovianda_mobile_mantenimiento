import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import {
  NewRecord,
  FinishRecord,
  Shop,
  Machine,
} from "../models/records.interface";

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

  finishRecord(body: FinishRecord,mantenanceId:number): Observable<any> {
    return this.http.put(`${this.url}/${mantenanceId}`, body);
  }

  newShop(body: Shop): Observable<any> {
    return this.http.post(`${this.url}/store`, body);
  }

  newMachine(body: Machine): Observable<any> {
    return this.http.post(`${this.url}/device`, body);
  }

  getMachines(): Observable<any> {
    return this.http.get(`${this.url}/list/device`);
  }

  getShops(): Observable<any> {
    return this.http.get<Shop[]>(`${this.url}/stores`);
  }
}
