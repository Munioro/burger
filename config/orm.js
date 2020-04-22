const connection =  require('./connection');

let orm = {
    selectAll: function(table, cb){
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (table, vals, cb){
        let queryString = `INSERT INTO ${table} (burger_name, devoured) VALUE (?, false)`;
        console.log(queryString)
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res)
        })
    },
    updateOne: function(table, condition, cb) {
        var queryString = `UPDATE ${table} SET devoured = true WHERE ${condition}`;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }

          cb(result);
        });
      }

}
module.exports = orm;