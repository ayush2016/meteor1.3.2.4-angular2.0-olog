import {Orders} from '../collections/orders';
import {Meteor} from 'meteor/meteor';

Meteor.publish('orders', function() {
   // return Orders.find();
    return Orders.find({

                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
    });
});
