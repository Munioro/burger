const express =  require('express');
var router = express.Router();

const burger = require('../models/burgers');

router.get("/", (req, res) => {
    burger.all((data) => {
        let obj = {
            burger: data
        };
        console.log(obj);
        res.render('index', obj);
    })
});

router.post('/api/burgers', (req,res) => {
    burger.create(
      req.body.burger_name,
       function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});
router.put('/api/burgers/:id', (req, res) => {
    let condition = `id = ${req.params.id}`;
    console.log('condition',  condition);

    burger.update(condition, (result) => {
        if (result.changedRows == 0) {
            return res. status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
module.exports =  router;