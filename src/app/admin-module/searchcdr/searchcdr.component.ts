import { Component, OnInit } from '@angular/core';
import { ViewcdrComponent } from '../viewcdr/viewcdr.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionstorageService } from 'src/app/sessionstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcdr',
  templateUrl: './searchcdr.component.html',
  styleUrls: ['./searchcdr.component.css']
})
export class SearchcdrComponent  {
  searchText: string = '';
  filteredData: any[] = []; // You can bind this to your filtered search results

 

  constructor(public session:SessionstorageService,public route:Router) {}

 

  onSearch() {
    // Implement your search logic here.
    // You can filter data based on the 'searchText' and update 'filteredData'.

 

    // For example, let's assume you have a list of items in 'data' array:
    const data: any[] = [
      { name: 'Item 1', description: 'Description 1' },
      { name: 'Item 2', description: 'Description 2' },
      // ... other data items ...
    ];

 

    // Filter the data based on the 'name' field matching 'searchText'
    this.filteredData = data.filter(item => item.name.includes(this.searchText));
  }
  navigatetohome(){
    this.route.navigate(['/home'])
      }
}
