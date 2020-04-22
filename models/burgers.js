const orm = require('../config/orm');
//Create code that will call the ORM  functions using burger specific input for the ORM
let burger = {
    all: function (cb) {
        orm.selectAll('burgers', (res) => {
            cb(res)
        });
    },
    create: function (vals, cb) {
        orm.insertOne('burgers', vals,  (res) => {
            cb(res)
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res)
        });
    },
};

//Export
module.exports = burger;