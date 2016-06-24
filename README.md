Self learning!

Exploring AngularJs + Meteor + MongoDB :v:

Meteor makes writing distributed client code as simple as talking to a local database.
Every Meteor client includes an in-memory database cache. To manage the client cache, the
server publishes sets of JSON documents, and the client subscribes to these sets. As documents
in a set change, the server patches each client's cache automatically.

That introduces us to a new concept — Full Stack Reactivity.
In an Angular-ish language we might call it 3 way data binding.
The way to handle data in Meteor is through the Mongo.Collection class.
It is used to declare MongoDB collections and manipulate them.
Thanks to Minimongo, Meteor's client-side Mongo emulator, Mongo.Collection can be used from
both client and server code.

In short, Meteor core's setup has:

real-time reactivity through web sockets
two databases. One on the client for fast changes, another behind the server for official changes
a special protocol (called DDP) that synchronizes data between two databases
a bunch of small things that make creating an app with Meteor easier and more developer friendly!

U1:olog@olog.in P1:olog U2:snm@snm.in P2:snm

