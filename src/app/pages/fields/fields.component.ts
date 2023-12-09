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
<<<<<<< HEAD
    this._fieldService.getFields().subscribe(response =>{
      console.log(response)
      this.fields = response.data
=======
    this._fieldService.getFields().subscribe(data =>{
      console.log(data)
      this.fields = data
>>>>>>> 00d658accd55f5f3c9b2308d209d0a6eb9a5ab56
    }, error =>{
      console.log(error)
    })
  }
}
