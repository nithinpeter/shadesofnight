import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';


@Component({
  selector: 'login',
  providers: [
  ],
  directives: [
  ],
  pipes: [ ],
  template: require('./login.html')
})
export class Login {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello Login component');
  }

}
