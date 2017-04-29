import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SectionService {
  private API_PATH = 'http://howaboutyoursales.dev/sections';

  constructor(private http: Http) {}

  getAllSections(): Observable<any[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json() || []);
  }
}