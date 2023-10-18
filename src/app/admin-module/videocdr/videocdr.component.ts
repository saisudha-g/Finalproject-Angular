import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CdrserviceService } from 'src/app/cdrservice.service';
import { SessionstorageService } from 'src/app/sessionstorage.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-videocdr',
  templateUrl: './videocdr.component.html',
  styleUrls: ['./videocdr.component.css']
})
export class VideocdrComponent {
  videocdr:FormGroup;
 
  searchlist: any;
  searchText: any;
  originalSearchlist: any;
  
//datatables

dtoptions: DataTables.Settings = {};
  constructor(public service:CdrserviceService,private fb: FormBuilder,public session:SessionstorageService,public route:Router){
    this.  videocdr = this.fb.group({
      n: ['', [Validators.required]],
        });
  }
  //data tables

  ngOnInit(): void {

    this.dtoptions = {

      pagingType: 'full_numbers',

      searching: true,

      lengthChange: false,

      language: {

        searchPlaceholder: 'Search Here'

      }
   
    };
    this. generateCDRs();
    

  }
  
  generateCDRs(){
    console.log("hi")
    const n=this.  videocdr.get('n')?.value;
    console.log(n);
    // this.service.getcdr(n).subscribe((pro)=>{this.productlist=pro});
    this.searchlist=this.service.getvideocdr(n).subscribe((e: any)=>{if(Array.isArray(e))
      {
        console.log(e);
        this.searchlist=e;
        console.log(this.searchlist);
      }})
}
downloadCdr() {
  const workbook = XLSX.utils.book_new();



  // Add a worksheet to the workbook
  const worksheet = XLSX.utils.json_to_sheet(this.searchlist);



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
}




