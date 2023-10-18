import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-makecall',
  templateUrl: './makecall.component.html',
  styleUrls: ['./makecall.component.css']
})
export class MakecallComponent {
  
 
  callerForm: FormGroup;
  callerNumberValue: string = '';
  timer: string = '00:00'; // Initialize timer to 00:00
  callStarted: boolean = false;
  interval: any;
  startTime:Date|null=null;

 

  constructor(private fb: FormBuilder) {
    this.callerForm = this.fb.group({
      callerNumber: ['', Validators.required]
    });
  }

 

  appendToCallerInput(value: string) {
    const callerNumberControl = this.callerForm.get('callerNumber');
    if (callerNumberControl) {
      const currentValue = callerNumberControl.value || '';
      callerNumberControl.setValue(currentValue + value);
      this.callerNumberValue = callerNumberControl.value;
    }
  }

 

  clearCallerInput() {
    const callerNumberControl = this.callerForm.get('callerNumber');
    if (callerNumberControl) {
      callerNumberControl.setValue('');
      this.callerNumberValue = '';
    }
  }

 

  callNumber() {
    if (!this.callStarted) {
      this.startCallTimer();
      this.callStarted = true;
      this.startTime=new Date();
      const callerNumberControl=this.callerForm.get('callerNumber');
      if(callerNumberControl){
        const callerNumber=callerNumberControl.value;
        console.log('submitted number:',callerNumber);
      }
    }
  }

 

  endCall() {
    this.stopCallTimer();
    this.callStarted = false;
    if(this.startTime){
      const endTime=new Date();
      const callDuration=this.calculateCallDuration(this.startTime,endTime);
      console.log('call duration:',callDuration);
    }
   
   
    // Handle ending the call (e.g., hang up)
  }

 

  private startCallTimer() {
    let seconds = 0;
    this.interval = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      this.timer = `${this.formatTime(minutes)}:${this.formatTime(remainingSeconds)}`;
    }, 1000);
  }

 

  private stopCallTimer() {
    clearInterval(this.interval);
    this.timer = '00:00';
  }

 

  private formatTime(time: number) {
    return time < 10 ? `0${time}` : time.toString();
  }
  

 

  private calculateCallDuration(startTime: Date, endTime: Date) {
    const durationInSeconds = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  }
}



 




 

  
 

  
