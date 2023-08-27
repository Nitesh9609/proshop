import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT)
        console.log('Connected to DB Successfully');
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB