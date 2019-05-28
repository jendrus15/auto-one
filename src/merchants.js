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
            { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' },
            { id: '2', carTitle: 'Opel', amount: 1, created: '2019-05-27' },
            { id: '3', carTitle: 'Opel', amount: 1, created: '2019-05-27' },
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
            { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
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
            { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
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
            { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
        ]
    },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
    // { 
    //     id: uuid.v4(),
    //     firstname: 'Andrzej4',
    //     lastname: 'Sikorski',
    //     avatarUrl: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=50',
    //     email: 'asikorski@dev.pl',
    //     phone: '666555111',
    //     hasPremium: true,
    //     bids: [
    //         { id: '1', carTitle: 'Opel', amount: 1, created: '2019-05-27' }
    //     ]
    // },
];

exports.getAll = function(request, response) {
    response.send(merch);
}