import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    show:boolean = false;
    error:boolean = false;
    success:boolean = false;
    message:string = "";
    service:string = "";
    templateId:string = "";
    private key = "TmVzTGSC-SVbh2cgJ";

    constructor() {
      emailjs.init(this.key);
    }

    disableScrolling(){
      document.body.style.setProperty("overflow", "hidden");
    }
  
    enableScrolling(){
      document.body.style.setProperty("overflow", "auto");
    }

    close(){
      this.show = false;
      this.enableScrolling();
    }

    async send(data:NgForm){
      this.service = "service_r7t4cao";
      this.templateId= "template_ml1k4hx";

        const params = {
          name: data.value.name,
          email: data.value.email,
          message: data.value.message
        };

      if(data.value.name===''){
        this.message = "It's Look like you didn't Enter your Name.\nPlease Enter Your Name";
        this.show = true;
        this.error = true;
        this.disableScrolling();
      } else if(data.value.email===''){
        this.message = "It's Look like you didn't Enter your Email Id Correctly.\nPlease Enter Your Email Id ";
        this.show = true;
        this.error = true;
        this.disableScrolling();
      } else if(data.value.message===''){
        this.message = "It's Look like you didn't Enter the Message.\nPlease Enter the Message";
        this.show = true;
        this.error = true;
        this.disableScrolling();
      } else if(data.value.sub===""){
        this.message = "It's Look like you didn't Enter the Subject.\nPlease Enter the Subject";
        this.show = true;
        this.error = true;
        this.disableScrolling();
      } else{
        await emailjs.send(this.service, this.templateId, params)
        .then((res)=>{
          this.show = true;
          this.success = true;
          // this.disableScrolling();
        })
        .catch((err)=> { console.log(err) });
      }
    }
}
