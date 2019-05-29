const uuid = require('uuid');

const merch = [
    { 
        id: uuid.v4(),
        firstname: 'Andrzej',
        lastname: 'Sikorski',
        avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
        email: 'asikorski@dev.pl',
        phone: '666555111',
        hasPremium: false,
        bids: [
            { id: uuid.v4(), carTitle: 'Opel', amount: 1, created: '2019-05-27' },
            { id: uuid.v4(), carTitle: 'Nissan', amount: 2, created: '2018-01-05' },
            { id: uuid.v4(), carTitle: 'Ford', amount: 10, created: '2019-05-27' },
        ]
    },
    { 
        id: uuid.v4(),
        firstname: 'Anita',
        lastname: 'Włodarczyk',
        avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
        email: 'anita@dev.pl',
        phone: '666777888',
        hasPremium: true,
        bids: [
            { id: uuid.v4(), carTitle: 'Corsa', amount: 5, created: '2018-07-25' }
        ]
    },
    { 
        id: uuid.v4(),
        firstname: 'Vin',
        lastname: 'Diesel',
        avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
        email: 'vin@dev.pl',
        phone: '666',
        hasPremium: true,
        bids: [
            { id: uuid.v4(), carTitle: 'Mustang', amount: 98, created: '2015-04-01' }
        ]
    },
    { 
        id: uuid.v4(),
        firstname: 'Steve',
        lastname: 'Rogers',
        avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
        email: 'captain@america.usa',
        phone: '777',
        hasPremium: false,
        bids: [
            { id: uuid.v4(), carTitle: 'Fiesta', amount: 0, created: '2019-03-17' }
        ]
    },
];

exports.getAll = function(request, response) {
    response.send(merch);
}