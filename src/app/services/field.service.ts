import { Injectable } from "@angular/core";
import { Field } from "../shared/models/field";
import { sample_fields } from "src/dataFields";

@Injectable({
    providedIn: 'root'
})

export class FieldService {

    constructor() { }
    
    getAll():Field[]{
        return sample_fields
    }

    getFieldById(fieldId:string):Field{
        return this.getAll().find(field => field.idField == fieldId) ?? new Field();
    }
}