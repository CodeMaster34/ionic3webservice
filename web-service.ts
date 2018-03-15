/*
Author: Faruk Aslan (CodeMaster34)
Date: 08.03.2018
Contact: farukaslan@yandex.com
*/

import { AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServiceProvider {
  public api = "http://213.74.188.242:8080/randevu/service/";

  constructor(public http: HttpClient, private alert: AlertController) {
    
  }

  // Get Method
  getdata(url, param:any="") {
    // Headers
      let headers = new HttpHeaders(
        {'Authorization':'Bearer 1212',
        'Content-Type': 'application/x-www-form-urlencoded',
        }
      );
    // Params
      let params = new HttpParams()
      if(param){
        for (var i = 0; i < param.length; i++) {
            params = params.append(param[i].key,param[i].value);
        }
      }
        return new Promise((resolve, reject) => {
            this.http.get(this.api + url, {headers: headers,params:params}).subscribe(data => {
                resolve(data)
              }, (err) => {
                reject(err);
              });
          });
    }

// Post Method
    postdata(url, data:any=""){
      //Heders
        let headers = new HttpHeaders(
          {'Authorization':'Bearer 1212',
          'Content-Type': 'application/x-www-form-urlencoded',
          }
        )

        let params:any;
        if(data){
          for (var i = 0; i < data.length; i++) {
              if(i === 0){
                params = data[i].key+"="+data[i].value;
              }else{
                params = params + "&" + data[i].key+"="+data[i].value;
              }
          }
        }
        return new Promise((resolve, reject) => {
          this.http.post(this.api + url ,params, {headers: headers}).subscribe( data => {
            resolve(data)
          }, (err) => {
            reject(err)
          })
        })
    }


    erroralert(error){
      let hata = this.alert.create({
        title: "Sunucu Hatası",
        subTitle: error.message,
        buttons: ['Tamam']
      });
      hata.present();
    }

    mainrror(title, mesaj){
      let hata = this.alert.create({
        title: title,
        subTitle: mesaj,
        buttons: ['Tamam']
      });
      hata.present();
    }

}
