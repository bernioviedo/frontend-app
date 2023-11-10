import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/app/shared/models/field';
import { Observable } from 'rxjs';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-field-booking',
  templateUrl: './field-booking.component.html',
  styleUrls: ['./field-booking.component.css']
})
export class FieldBookingComponent implements OnInit{
  field!: Field;
  
  constructor(private route:ActivatedRoute, private fieldService:FieldService) {

    /*activatedRoute.params.subscribe((params) =>{
      if(params.fieldId)
      this.field = fieldService.getFieldById(params.fieldId)
      console.log('hola' + params.fieldId)
    })*/

  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params)
      if(params.idField)
      this.field = this.fieldService.getFieldById(params.idField)
    })
    console.log('parrilla ' + this.field.grill)
  }

}
