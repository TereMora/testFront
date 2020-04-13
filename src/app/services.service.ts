import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiURL: string;
  private httpOptions: any;
  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.apiEndpoint;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  /*========================================
      CRUD Methods for consuming RESTfull API
    =========================================*/
    public getUsers() {
      return (this.httpClient.get(this.apiURL, this.httpOptions)
          .toPromise()
          .then((resp) => {
              console.log('resp4: ', resp);
             // if (resp.Code === 200) {
                  return resp;
            //  } else {
              //    console.error(resp);
              // return [];
            //  }
          })
          .catch((err) => {
              console.error('responseError', err);
              let errorStr: string;
              try {
                  let e: any;
                  e = err.error;
                  errorStr = e.message;
                  if (!errorStr) {
                      errorStr = 'Ocurrió un error de conexión';
                  }
              } catch (e) {
                  console.error('responseError:', e);
                  errorStr = 'Ocurrió un error de conexión';
              }

             // this.mostrarAlerta('Ocurrió un error de conexión', true);
          }));
    }


}
