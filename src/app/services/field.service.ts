import { Injectable } from "@angular/core";
import { Field } from "../shared/models/field";
import { sample_fields } from "src/dataFields";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FieldService {
    
    url = 'http://localhost:8080/api/fields'

    constructor(private http:HttpClient) { }

        getFields(): Observable<any> {
            return this.http.get(this.url)
        }

        getFieldById(fieldId:string):Observable<any>{
            return this.http.get(this.url)
        }
    
}