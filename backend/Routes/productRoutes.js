import express from 'express'
import {getAllProducts, getProductById} from '../Controllers/productController.js'
const route = express.Router()

route.get('/', getAllProducts)
route.get('/:id', getProductById)


export default route