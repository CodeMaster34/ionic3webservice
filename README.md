# ionic3webservice
İonic 3 rest API Web Service Provider

# METHODS
Http Get, Http Post

# USİNG GENERAL
1-) Create Provider WebService
2-) Import WebService Provider and HttpClientModule  "app/app.module.ts" 
3-) Add "WebServiceProvider" providers tag and Add HttpClientModule add imports tag
4-) Import WebService Provider your page and add public or private your constructor tag

- Example:
       
        import { HttpClientModule } from '@angular/common/http';
        import { WebServiceProvider } from '../providers/web-service/web-service';
        ...
        imports: [
            ...
            BrowserModule,
            HttpClientModule,
            IonicModule.forRoot(MyApp)
          ],
          ...
          providers: [
            ...
            {provide: ErrorHandler, useClass: IonicErrorHandler},
            WebServiceProvider,
          ]
  
  # USING GET METHOD
      import { WebServiceProvider } from './../../providers/web-service/web-service';

      constructor(public navCtrl: NavController, public navParams: NavParams,private ws: WebServiceProvider) {}

      ionViewDidLoad() {
       let param = [
         {"key":"param1", value:"value1"},
         {"key":"param2", value:"value2"},
       ]
        this.ws.getdata('your_page.php', param).then( data =>{
            console.log(data);
          }
        }).catch( error => {
          this.ws.erroralert(error);
        })
      }
  
  # USING POST METHOD
  
       import { WebServiceProvider } from './../../providers/web-service/web-service';

      constructor(public navCtrl: NavController, public navParams: NavParams,private ws: WebServiceProvider) {}

      ionViewDidLoad() {

      let param = [
         {"key":"param1", value:"value1"},
         {"key":"param2", value:"value2"},
       ]

        this.ws.postdata("your_post_url.php", param).then( data => {
              console.log(data);
            }).catch( error =>{
              this.ws.erroralert(error);
            })

      }
  

