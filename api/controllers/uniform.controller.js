import { errorHandler } from "../utils/error.js";
import Uniform from "../models/uniform.model.js";

export const addUniform = async (req, res, next) => {
    let inventory = await Uniform.find({});
    let sku;
    //Make sure unique sku gets generated for specific type, gender and size uniform combination
    if(inventory.length > 0){
        let lastInventoryArray = inventory.slice(-1);
        let lastInventory = lastInventoryArray[0];
        sku = lastInventory.sku + 1;
    } else {
        sku = 1;
    }
    let { 
        type,
        description,
        gender,
        size,
        quantity,
    } = req.body;

    if (req.body.size[0].shirt) {
        size = req.body.size[0].shirt;
    } //else if (req.body.size.type.sweatshirt) {
    //     size = req.body.size.type.sweatshirt;
    // } else if (req.body.size.type.shorts) {
    //     size = req.body.size.type.shorts;
    // } else {
    //     size = req.body.size.type.pants;
    // }

    // CREATE FUNCTION TO CHECK IF VALUE ALREADY EXISTS
    // const checkCurrentInventory = Uniform_Inventory.findOne({
    //     $and: [
    //         {}
    //     ]
    // })

    const newInventory = new Uniform({
        type,
        sku,
        description,
        gender,
        size,
        quantity,
    });

    try {
        await newInventory.save();
        res.status(200).json('New inventory was successfully added');
    } catch (error) {
        console.log(req.body);
        next(error);
    }
};

export const deleteUniform = async (req, res, next) => {
    //Make sure user deleting is an Admin
    // if (!req.user.isAdmin) {
    //     return next(errorHandler(403, "You are not authorized to delete this user"));
    // }
    
    try {
        await Uniform.findOneAndDelete({sku:req.body.sku});
        res.status(200).json({
            success:true,
            description:req.body.description,
            sku:req.body.sku,
        })
    } catch (error) {
        next(error);
    }
}