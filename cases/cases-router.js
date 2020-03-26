const router = require('express').Router();
const Cases = require('./cases-model');

router.get('/', (req, res) => {
    Cases
    .find()
    .then(users => {
            res.json(users);
    })
    .catch(error => res.send(error));
});


router.get('/:id', (req, res) => {
    const id = req.params.id
    Cases.findById(id)
    .then(user => {
    res.status(200).json( user);
    })
.catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "This case information could not be retrieved."})
})
});

router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    Cases.add(data)
    .then(newCase => {
    res.status(201).json(newCase);
    })
    .catch (err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to add new case' });
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    const { user } = id;

    user ? res.status(400).json({ errorMessage: " Please provide all required information" }) :

    Cases.update(id, changes)
    .then( update => {
        update === 0 ? res.status(404).json({ message: "This case does not exist." }) : res.status(200).json(changes);
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({ error: "There was an error while saving the case information" });
});
});



router.delete('/:id', (req, res) => {
    Cases.remove(req.params.id)
    .then(removed => {
        removed > 0 ? res.status(200).json({ message: 'case successfully deleted' }) : res.status(404).json({ message: "The specified case does not exist." });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "Could not remove case" })
    })
});


module.exports = router;