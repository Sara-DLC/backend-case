const router = require('express').Router();
const Users = require('./users-model');

router.get('/', (req, res) => {
    Users
    .find()
    .then(users => {
            res.json(users);
    })
    .catch(error => res.send(error));
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    Users.findById(id)
    .then(user => {
    res.status(200).json( user);
    })
.catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "The users information could not be retrieved."})
})
});

router.post('/', (req, res) => {
    const data = req.body;
    Users.add(data)
    .then(newTask => {
    res.status(201).json(newTask);
    })
    .catch (err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to add new user' });
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    const { user } = id;

    user ? res.status(400).json({ errorMessage: " Please provide all required information" }) :

    Users.update(id, changes)
    .then( update => {
        update === 0 ? res.status(404).json({ message: "This user does not exist." }) : res.status(200).json(changes);
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({ error: "There was an error while saving the users information" });
});
});



router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(removed => {
        removed > 0 ? res.status(200).json({ message: 'user successfully deleted' }) : res.status(404).json({ message: "The specified user does not exist." });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "The user could not be removed" })
    })
});


module.exports = router;