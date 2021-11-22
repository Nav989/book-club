const db = require('../../database/mysql')

const Users = db.User;

const register = async (req, res) => {
    if (req.body.password === req.body.cpassword) {
        const createData = await Users.create({
            name: req.body.name,
            surname: req.body.surname,
            dob: req.body.dob,
            email: req.body.email,
            password: req.body.password,
            user_type: req.body.usertype
        });

        await createData.save()
        res.status(201).send(createData)
    } else {
        res.status(400).json({
            message: "password & cP not same"
        })
        console.log("password not matched")
    }

}

const login = async (req, res) => {


    const createData = await Users.findOne({
        email: req.body.email,
        password: req.body.password,
        user_type: req.body.user_type
    })
    res.status(201).send(createData)

    res.status(400).json({
        message: "data not matched with register"
    })
}

module.exports = {
    register,
    login
}