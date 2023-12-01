import { Component, OnInit } from '@angular/core';
import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/app/shared/models/field';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
fields: Field[] = [];

  
  constructor(private _fieldService:FieldService) {
  }
  ngOnInit(): void {
    this.getFields()
  }
  getFields(){
    this._fieldService.getFields().subscribe(data =>{
      console.log(data)
    }, error =>{
      console.log(error)
    })
  }
}
