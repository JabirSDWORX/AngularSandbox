import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() brandNames: string[];
  constructor() { }

  ngOnInit(): void {
    console.log('from drawer component ', this.brandNames);
  }
}
