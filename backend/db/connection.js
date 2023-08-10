import mongoose from "mongoose";

const connectDB = (dbUrl, dbName) => {
    mongoose.connect(dbUrl+dbName)

    const db = mongoose.connection

    db.on('open', () => {
        console.log('Database Connected!')
    })
}

export default connectDB