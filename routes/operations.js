const router = require('express').Router();
const operations = require('../resources/operations');

// end point for available operations

router.get('/', (req, res) => {
            res.json(operations);
        }
    );

    

module.exports = router;