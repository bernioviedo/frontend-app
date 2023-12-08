import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Field } from 'src/app/shared/models/field';

@Component({
  selector: 'app-add-fields',
  templateUrl: './add-fields.component.html',
  styleUrls: ['./add-fields.component.css']
})
export class AddFieldsComponent implements OnInit {

  selectedFile!: File;
  fieldError:string="";
  fieldForm=this.formBuilder.group({
    price:['',Validators.required],
    type:['',Validators.required],
    status:[false],
    imageUrl:['']
  })

constructor(private http:HttpClient, private formBuilder:FormBuilder){}

onFileSelected(event: any) {
this.selectedFile = <File>event.target.files[0];
}

onUpload(){
const fd = new FormData();
/*fd.append('image', this.selectedFile, this.selectedFile.name);*/
const field: Field = {
  type: this.fieldForm.get('type')?.value,
  price: this.fieldForm.get('0')?.value,
  idField: '',
  state: false,
  imageUrl: this.fieldForm.get('imageUrl')?.value,
  grill: false
}
this.http.post('http://localhost:8080/api/fields', fd)
.subscribe(res => {
  console.log(res);
})
}

ngOnInit(): void {
}
get type(){
  return this.fieldForm.controls.type
}

get price(){
  return this.fieldForm.controls.price
}
get imageUrl(){
return this.fieldForm.controls.imageUrl
}
}