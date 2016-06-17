/**
 * Created by Ayush on 16-06-2016.
 */
//Then create main.ts to run this method on Meteor startup

import {loadOrders} from './load-orders.ts';
import {Meteor} from 'meteor/meteor';

import './orders.ts';

Meteor.startup(loadOrders);
