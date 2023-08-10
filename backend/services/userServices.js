import userModel from "../modal/userModel.js";

const createUser = async (name, age, address) => {
    const user = await new userModel({name:name,age:age,address:address})
    const result = user.save()
}

const getUsers = async () => {
    const findAllUser = await userModel.find()
    return findAllUser
}

const getUser = async (_id) => {
    console.log('hi.....getUser...')
    try {
        const findUser = await userModel.find({_id:_id})
    console.log(findUser)
    return findUser
    } catch (error) {
        console.log("error")
    }
}

const deleteUser = async (_id) => {
    const d = await userModel.deleteOne({ _id:_id })
    return d
}
const updateUser = async (_id, name, age, address) => {
    const user = await userModel.replaceOne({ _id: _id }, { name: name,  age : age, address:address } )
    // await user.save()
}

export {createUser, getUsers, deleteUser, updateUser, getUser}