import {Orders} from '../collections/orders';
import {Meteor} from 'meteor/meteor';

Meteor.publish('orders', function() {
   // return Orders.find();
    return Orders.find({
        $or: [
            { 'public': true },
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            }
        ]
    });
});