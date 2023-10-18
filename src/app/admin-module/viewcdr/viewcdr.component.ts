import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionstorageService } from 'src/app/sessionstorage.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-viewcdr',
  templateUrl: './viewcdr.component.html',
  styleUrls: ['./viewcdr.component.css']
})
export class ViewcdrComponent {
  cdrData: any[] = [];
  filteredCdrData: any[] = [];
 

  constructor(public session:SessionstorageService,public route:Router) {
    // Generate random CDR data for demonstration
    for (let i = 0; i < 10; i++) {
      this.cdrData.push({
        callerSim: `Caller${i}`,
        calleeSim: `Callee${i}`,
        outgoingBTS: this.getRandomThreeDigitNumber(),
        incomingBTS: this.getRandomThreeDigitNumber(),
        duration: Math.floor(Math.random() * 60) , // Random duration between 60 and 660 seconds
        timestamp: new Date()
      });
    }
  }

 

  getRandomThreeDigitNumber(): string {
    const min = 100;
    const max = 999;
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  }

 

  downloadCdr() {
    const workbook = XLSX.utils.book_new();

 

    // Add a worksheet to the workbook
    const worksheet = XLSX.utils.json_to_sheet(this.cdrData);

 

    // Set the worksheet name
    XLSX.utils.book_append_sheet(workbook, worksheet, 'CDR Data');

 

    // Generate an array buffer containing the Excel file data
    const arrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

 

    // Convert the array buffer to a Blob
    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

 

    // Create a download link and trigger the download
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobURL;
    anchor.download = 'cdr_data.xlsx';
    anchor.click();

 

    // Release the object URL
    window.URL.revokeObjectURL(blobURL);
  }
  navigatetohome(){
    this.route.navigate(['/home'])
      }
  // filterCdrData(searchText: string) {
  //   if (searchText) {
  //     // Filter the CDR data based on the searchText and the 'calleeSim' field
  //     this.filteredCdrData = this.cdrData.filter(cdr => cdr.calleeSim.includes(searchText));
  //   } else {
  //     // If no search text, show all data
  //     this.filteredCdrData = this.cdrData;
  //   }
  // }
  }

