module.exports = function(app){    
    const merchants = require('./merchants');
    app.get('/merchants', merchants.getAll);
}