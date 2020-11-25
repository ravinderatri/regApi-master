const router = require('express').Router();
const User = require('../model/User');
router.post('/register', async(req, res) => {

     const password = req.body.password;
     const conpassword= req.body.confirmpassword;
     if(password === conpassword){
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:password,
        confirmpassword:conpassword,
    });

    try {
        const SavedUser = await user.save();
        res.status(201).send(SavedUser)
    } catch (err) {
        res.status(400).send(err);
    }
}
});
router.post('/login', (req, res) => {
    res.send('Reister');
});
module.exports = router;