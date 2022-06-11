const router = require('express').Router();
const operations = require('../resources/operations');

// end point to retrieve main page

router.get('/', (req, res) => {
            res.render('layouts/mainpage.handlebars',
                {operations: operations}
            );
 
        }
    );

    

module.exports = router;