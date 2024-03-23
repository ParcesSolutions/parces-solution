import mongoose from "mongoose";


const uniformSchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['Shirt', 'Sweatshirt', 'Pants', 'Shorts'] 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female'] 
    },
    size: {
      type: {
        width: { 
            type: Number, 
            min: 28, max: 46 
        },
        length: { 
            type: Number, 
            min: 28, max: 42 
        },
        shirt_size: { 
            type: String, 
            enum: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'] 
        }
      },
      required: true
    },
    quantity: { 
        type: Number, 
        default: 0 
    }
  });


const Uniforms = mongoose.model('Uniforms', uniformSchema);

export default Uniforms;
