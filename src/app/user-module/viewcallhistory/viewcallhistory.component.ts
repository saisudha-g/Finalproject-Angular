import { Component } from '@angular/core';

@Component({
  selector: 'app-viewcallhistory',
  templateUrl: './viewcallhistory.component.html',
  styleUrls: ['./viewcallhistory.component.css']
})
export class ViewcallhistoryComponent {
  callHistory: CallHistoryEntry[] = [{direction:'outgoing',caller:'9841856924',callee:'7305639684',duration:'20:00'},{direction:'outgoing',caller:'9841856924',callee:'8124780007',duration:'25:00'}];

 

  ngOnInit(): void {
    // You can initialize the call history with existing entries or load from a service.
  }

 

  addCallHistoryEntry(entry: CallHistoryEntry) {
    this.callHistory.unshift(entry); // Add the new entry to the beginning of the array (real-time)
  }
}

 

interface CallHistoryEntry {
  direction: string; // "Incoming" or "Outgoing"
  caller: string;
  callee: string;
  duration: string; // "MM:SS" format
}


