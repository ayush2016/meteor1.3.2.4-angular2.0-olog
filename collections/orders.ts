/**
 * Created by Ayush on 16-06-2016.
 */
import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

//The TypeScript compiler converts .ts files to ES5, then registers a CommonJS module
// with the same name as the relative path to the file in the app.
//That's why we use the special word export. We are telling CommonJS what we are allowing
// the object to be exported from this module into the outside world.

//Meteor has a series of special folder names, including the client folder. All files within a folder named
//client are loaded on the client only. Likewise, files in a folder called server are loaded on the server only.
//Placing the collection folder outside of any special folder, makes its contents available to both the client and
//the server. Therefore, the parties collection (and the actions on it) will run on both the client (minimongo) and
//the server (Mongo).

//Though we only declared our model once, we have two modules that declare two versions of our parties collection:
//one for client-side and one for server-side. This is often referred to as "isomorphic" or "universal javascript".
//All synchronization between these two versions of collections is handled by Meteor.

export let Orders = new Mongo.Collection('orders');

//In only 10 lines of code we've specified that inserts, updates and
//removes can only be completed if a user is logged in.
//The callbacks passed to the Parties.allow are executed on the server only. The
//client optimistically assumes that any action (such as removal of a party) will
//succeed, and reverts the action as soon as the server denies permission.

Orders.allow({
    insert: function() {
        let user = Meteor.user();

        return !!user;
    },
    remove: function() {
        let user = Meteor.user();

        return !!user;
    }
});


