import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GetdataService } from 'src/app/getdata.service';
import { Pdata } from 'src/app/interface/pdata';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  
  myData: Pdata;

  constructor(private ldData: GetdataService) { }
  
  loadMyData(): void{
    this.myData = this.ldData.loadData();
  }
  
  ngOnInit() {
    this.loadMyData();
  }

}
