import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private httpClient = inject(HttpClient);
    private baseUrl: string;

    constructor(){
        this.baseUrl = 'http://localhost:8080/api/users'
     }

    register(formValue: any){
        return firstValueFrom(
            this.httpClient.post<any>(`${this.baseUrl}/register`, formValue) 
        )
    }

    login(formValue: any){
        return firstValueFrom(
            this.httpClient.post<any>(`${this.baseUrl}/login`, formValue) 
        )
    }
}