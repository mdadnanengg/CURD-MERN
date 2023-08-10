import { createUser, deleteUser, getUsers, updateUser, getUser } from "../services/userServices.js"

const userDataGet = async (req, res) => {

    const user = await getUser(req.body._id)

    console.log('asdfgh',req.body._id)



    res.json(user)
}

const UsersDataGet = async (req, res) => {

    const users = await getUsers()

    // console.log('all', users)

    res.json(users)
}

const addUserPost = (req, res) => {
    // console.log(req.body)
    
    const {name, age, address} = req.body

    const user = createUser(name, age, address)
   
    res.json(req.body)
}

const userDelete = async (req, res) => {
    console.log(req.body._id)

    const d = await deleteUser(req.body._id)
    console.log(d)
    // res.send(d)
}

const userUpdate = async (req, res) => {
    const {_id, name, age, address} = req.body

    console.log("req.body", req.body)

    const user = await updateUser(_id, name, age, address)

    console.log("u",user)

    res.send('User Updated')
}


export {addUserPost, UsersDataGet, userDelete, userUpdate, userDataGet}