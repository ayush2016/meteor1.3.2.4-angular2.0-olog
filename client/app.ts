//Meteor supports ES6 modules out of the box.This feature provides the ability to
// use import / export statements and gives you a full control for modules loading and dependencies.

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
//This is not a folder and files in your directory, but a reference to CommonJS modules aliased as @angular/core
// and @angular/platform-browser-dynamic, which in fact located under your node_modules directory.
import { Orders }   from '../collections/orders';
import { Mongo }     from 'meteor/mongo';
import { OrdersForm } from './imports/orders-form/orders-form';


@Component({
  selector: 'app',
  //Notice, the Component's selector matches the <app> tag we will provide in index.html below,
  // and the View template creates the view.

  templateUrl: '/client/app.html',
  //Our component is linked to it's template with the templateUrl property.

   directives: [OrdersForm]
  //There is one more required step in Angular 2 to load a component. The Socially component is not aware
  // of child components unless you explicitly let it know what to look for. Add the PartiesForm class as
  // a directive of the Socially, like this: directives: [PartiesForm]
})

//The class, Socially, inherits from @Component which is part of Angular 2.
/* class Olog {

//client/app.ts (12, 10): Property 'parties' does not exist on type 'Socially'.
// That's a TypeScript error that won't prevent your app from running but will give
// you extra information about your app.
// To help TypeScript check our app better, lets define our parties property as
// it is, a type of array made up of generic Objects.
  orders: Array<Object>;

  // A constructor is a function that runs when a class is loaded, thus it loads the initial data for the class.
  // We can attach data with the context this, referring to the Socially class.


  constructor() {
    this.orders = [
      {'name': 'Name1',
        'description': 'Description1',
        'source': 'Source1',
        'destination':'Destination1',
         'location':'Location1'
      },
      {'name': 'Name2',
        'description': 'Description2',
        'source': 'Source2',
        'destination':'Destination2',
        'location':'Location2'
      },
      {'name': 'Name3',
        'description': 'Description3',
        'source': 'Source3',
        'destination':'Destination3',
        'location':'Location3'
      }
    ];
  }
} */

class Olog {
  orders: Mongo.Cursor<Object>;

  constructor () {
    this.orders = Orders.find();
  }
//The Mongo Collection Parties has a method called "remove". We search for the relevant
//party by its identifier, _id, and delete it.

  removeOrder(order) {
    Orders.remove(order._id);
  }
}
bootstrap(Olog);
