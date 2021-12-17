import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    baseApiUrl: string;

    constructor(public http: HttpClient) {
        this.baseApiUrl = environment.baseApiUrl;
    }

   
    post(url: string, body: any) {
        url = this.baseApiUrl + url;
        return this.http.post(url, body).toPromise();
    }

    put(url: string, body: any) {
        url = this.baseApiUrl + url;
        return this.http.put(url, body).toPromise();
    }

    get(url: string) {
        url = this.baseApiUrl + url;
        return this.http.get(url).toPromise();
    }

    delete(url: string) {
        url = this.baseApiUrl + url;
        return this.http.delete(url).toPromise();
    }
}
