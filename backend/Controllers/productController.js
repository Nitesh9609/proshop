import products from '../Models/productModel.js'
import asyncHandler from '../Middelware/asyncHandler.js'

const getAllProducts = asyncHandler (async (req, res) => {
    const product = await products.find({})
    res.json(product)
})

const getProductById = asyncHandler (async (req, res) => {
    const product = await products.findById(req.params.id)

    if(product){
        res.json(product)
    }

    res.status(404)
    throw new Error('Resource not found')
})

export {getAllProducts, getProductById}