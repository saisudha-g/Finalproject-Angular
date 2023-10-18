import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from './Entity/Register';
@Injectable({
  providedIn: 'root'
})
export class CdrserviceService {
// reg:register[]=[]
  url:string="http://localhost:9191";
  constructor(private httpclient:HttpClient) { }
  // validation:boolean=false;
  // validation1:boolean=false;
  create(reg:register) {
    console.log(reg);
    // return this.httpclient.post(this.url,reg);
    return this.httpclient.post<string>(`${this.url}/register`,reg);
    // return this.httpclient.post(this.url+"/register",reg);

  }
  findphno(phoneNumber:String){
    // return this.httpclient.get(this.url+'/register'+phoneNumber);
    return this.httpclient.get(this.url+`/register/${phoneNumber}`);
  }
  findemail(email:String){
    
  }
  getcdr(n:number){
    return this.httpclient.get(this.url+`/voice/${n}`);

  }
  getsmscdr(n:number){
    return this.httpclient.get(this.url+`/smscdr/${n}`);

  }
  getvoipcdr(n:number){
    return this.httpclient.get(this.url+`/voipcdr/${n}`);

  }
  getroamingcdr(n:number){
    return this.httpclient.get(this.url+`/roamingcdr/${n}`);

  }
  getdatacdr(n:number){
    return this.httpclient.get(this.url+`/datacdr/${n}`);

  }
  getlocationcdr(n:number){
    return this.httpclient.get(this.url+`/locationcdr/${n}`);

  }
  getmmscdr(n:number){
    return this.httpclient.get(this.url+`/mmscdr/${n}`);

  }
  getvideocdr(n:number){
    return this.httpclient.get(this.url+`/videocdr/${n}`);

  }
  getvoipconcdr(n:number){
    return this.httpclient.get(this.url+`/voipconcdr/${n}`);

  }
  gettollcdr(n:number){
    return this.httpclient.get(this.url+`/tollcdr/${n}`);

  }
}
