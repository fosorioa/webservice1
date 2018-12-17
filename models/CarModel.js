var mongoose = require('mongoose');
mongoose.connect('mongodb://fosorio:fosorio85@cluster0-shard-00-00-1tpte.mongodb.net:27017,cluster0-shard-00-01-1tpte.mongodb.net:27017,cluster0-shard-00-02-1tpte.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    { useNewUrlParser: true });
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var CarSchema = new Schema({
}, {
        collection: 'carmodels'
    });

module.exports = mongoose.model('CarModel', CarSchema);