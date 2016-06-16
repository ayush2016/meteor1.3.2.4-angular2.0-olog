//Let's make a new component called PartiesForm, and put it inside it's own directory (client/imports/parties-form).
//Notice that we are placing the file inside the imports folder.
// That is another Meteor special folder name that tells Meteor to load the modules inside it just when
// some other module is importing it.

import 'reflect-metadata';
import { Component } from '@angular/core';

@Component({
    selector: 'orders-form',
    templateUrl: '/client/imports/orders-form/orders-form.html'
})
export class OrdersForm { }
//Notice that we are exporting the class PartiesForm using ES6 module syntax. As a result, you'll be able
//to import PartiesForm in any other component as follows:
//import { PartiesForm } from 'client/imports/parties-form/parties-form';
//By exporting and importing different modules, you create a modular structure of your app in ES6, which is similar
//to the modules in other script languages like Python. This is what makes programming in ES6 really awesome since
//application structure comes out rigid and clear.
