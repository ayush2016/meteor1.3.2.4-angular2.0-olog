import { Orders } from '../collections/orders.ts';
//Let's add a file called load-parties.ts inside of "server" folder and implement
//loadParties method inside to load parties

export function loadOrders() {
    if (Orders.find().count() === 0) {

        var orders = [
            {'name': 'Name1',
                'description': 'Description1',
                'source': 'Source1',
                'destination':'Destination1',
                'location':'Location1',
                'public': false

            },
            {'name': 'Name2',
                'description': 'Description2',
                'source': 'Source2',
                'destination':'Destination2',
                'location':'Location2',
                'public': false
            },
            {'name': 'Name3',
                'description': 'Description3',
                'source': 'Source3',
                'destination':'Destination3',
                'location':'Location3',
                'public': false
            }
        ];

        for (var i = 0; i < orders.length; i++) {
            Orders.insert(orders[i]);
        }
    }
}