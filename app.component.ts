import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>`,
})
export class AppComponent  { pageTitle : string = `Session 12 Assignment 3`; }




