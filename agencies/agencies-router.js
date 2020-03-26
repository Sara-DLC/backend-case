const router = require('express').Router();
const Agency = require('./agencies-model');
const User = require('../users/users-model');

router.get('/', (req, res) => {
    Agency
    .find()
    .then(users => {
            res.json(users);
    })
    .catch(error => res.send(error));
});


router.get('/:id', (req, res) => {
    const id = req.params.id
    Agency.findById(id)
    .then(user => {
    res.status(200).json( user);
    })
.catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "This agencies information could not be retrieved."})
})
});

router.post('/', (req, res) => {
    const data = req.body;
    Agency.add(data)
    .then(newTask => {
    res.status(201).json(newTask);
    })
    .catch (err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to add new agency' });
    });
});


router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    const { user } = id;

    user ? res.status(400).json({ errorMessage: " Please provide all required information" }) :

    Agency.update(id, changes)
    .then( update => {
        update === 0 ? res.status(404).json({ message: "This agency does not exist." }) : res.status(200).json(changes);
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({ error: "There was an error while saving the agency information" });
});
});



router.delete('/:id', (req, res) => {
    Agency.remove(req.params.id)
    .then(removed => {
        removed > 0 ? res.status(200).json({ message: 'agency successfully deleted' }) : res.status(404).json({ message: "The specified agency does not exist." });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "The agency could not be removed" })
    })
});


module.exports = router;