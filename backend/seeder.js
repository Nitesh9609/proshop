import mongoose from "mongoose";
import dotenv from 'dotenv'
import users from "./Data/user.js";
import products from "./Data/products.js";
import User from './Models/userModel.js'
import Product from './Models/productModel.js'
import Order from './Models/orderModel.js'
import connectDB from "./Config/db.js";

dotenv.config()

connectDB()

const importData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createUsers = await User.insertMany(users)
        const adminUser = createUsers[0]._id

        const sampleProducts = products.map(p => {
            return { ...p, user: adminUser }
        })

        await Product.insertMany(sampleProducts)
        console.log("Data inserted");
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

const destroyData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data Destroyed");
        products.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}
else {
    importData()
}