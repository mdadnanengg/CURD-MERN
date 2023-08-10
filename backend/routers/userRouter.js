import express from 'express'
import { addUserPost, userDelete, UsersDataGet, userUpdate, userDataGet } from '../controllers/userController.js'

const routerUser = express.Router()

routerUser.get('/get-user', UsersDataGet)

routerUser.post('/get-one-user', userDataGet)

routerUser.post('/add-user', addUserPost)

routerUser.delete('/delete-user', userDelete)

routerUser.put('/update-user', userUpdate)

export {routerUser}