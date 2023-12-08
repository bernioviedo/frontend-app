import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/app/shared/models/field';
import { Observable } from 'rxjs';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
  selector: 'app-field-booking',
  templateUrl: './field-booking.component.html',
  styleUrls: ['./field-booking.component.css']
})
export class FieldBookingComponent implements OnInit{
  field!: Field;
  
  constructor(private route:ActivatedRoute, private _fieldService:FieldService) {

    /*activatedRoute.params.subscribe((params) =>{
      if(params.fieldId)
      this.field = fieldService.getFieldById(params.fieldId)
      console.log('hola' + params.fieldId)
    })*/

  }

  ngOnInit(): void {
    this.getFields()
  }

  getFields(){
    this._fieldService.getFields().subscribe(data =>{
      console.log(data)
    }, error =>{
      console.log(error)
    }
    )
  }

}
