import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrl: './topheading.component.scss',
})
export class TopheadingComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}

  TopheadingDisplay: any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.TopheadingDisplay = result.articles;
    });
  }
}
