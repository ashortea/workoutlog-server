const router = require('express').Router();
const Log = require('../db').import('../models/log');
const validateSession = require('../middleware/validate-session');


router.get('/', (req, res) => {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.post('/', validateSession, (req, res) => {
    const logFromRequest = {
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.result,
        owner: req.body.owner
    }

    Log.create(logFromRequest)
    .then(log => res.status(200).json(log))
    .catch(err => res.json(req.errors));
})
// GET ITEM BY NAME
router.get('/:name', (req, res) => {
    Log.findOne({
        where: {
            description: req.params.description
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({
        error: err
    }))
    // console.log(req);
})

// UPDATE BY ID
router.put('/:id',validateSession, (req, res) => {
    Log.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})
// DELETE BY ID
router.delete('/:id',validateSession, (req, res) => {
    Log.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})



module.exports = router;