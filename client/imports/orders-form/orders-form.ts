//Let's make a new component called PartiesForm, and put it inside it's own directory (client/imports/parties-form).
//Notice that we are placing the file inside the imports folder.
// That is another Meteor special folder name that tells Meteor to load the modules inside it just when
// some other module is importing it.

import 'reflect-metadata';
import { Component } from '@angular/core';
//import { FormBuilder, ControlGroup, Validators } from '@angular/
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Orders } from '../../../collections/orders.ts';

import { Meteor } from 'meteor/meteor';


@Component({
    selector: 'orders-form',
    templateUrl: '/client/imports/orders-form/orders-form.html'
})
//export class OrdersForm { }
//Notice that we are exporting the class PartiesForm using ES6 module syntax. As a result, you'll be able
//to import PartiesForm in any other component as follows:
//import { PartiesForm } from 'client/imports/parties-form/parties-form';
//By exporting and importing different modules, you create a modular structure of your app in ES6, which is similar
//to the modules in other script languages like Python. This is what makes programming in ES6 really awesome since
//application structure comes out rigid and clear.
export class OrdersForm {

    //Each element of the form model is actually going to be an instance of Control type. It's a special
    //type, which binds to a form input element and can provide data validation in the model on demand.
    // Form model itself is of ControlGroup type. As its name says, it groups provided controls together.

    ordersForm: ControlGroup;

    constructor() {
        let fb = new FormBuilder();

        this.ordersForm = fb.group({
            //Now, since name and location are required fields in our model, let's set up validation.

            name: ['',Validators.required],
            description: [''],
            source: ['',Validators.required],
            destination: ['',Validators.required]
        });
    }

    addOrder(order) {
        if (this.ordersForm.valid) {
            if (Meteor.userId()) {
                Orders.insert({
                    name: order.name,
                    description: order.description,
                    source: order.source,
                    destination: order.destination,
                    'public': order.public,
                    owner: Meteor.userId()
                });
//TypeScript doesn't know that controls properties are of Control type. That's why we
//are casting them to the Control type.
                (<Control>this.ordersForm.controls['name']).updateValue('');
                (<Control>this.ordersForm.controls['description']).updateValue('');
                (<Control>this.ordersForm.controls['source']).updateValue('');
                (<Control>this.ordersForm.controls['destination']).updateValue('');
                (<Control>this.ordersForm.controls['public']).updateValue(false);
            }
        }else {
            alert('Please log in to add a party');
        }

    }

}