import mongoose from "mongoose";


const uniformSchema = new mongoose.Schema({

    type: { type: String, enum: ['Shirt', 'Sweatshirt', 'Pants', 'Shorts'], required: true },
    sku: { type: Number, required: true, unique: true},
    description: { type: String, required: true},
    image: { type: String },
    gender: { type: String, enum: ['M', 'F'], required: true },
    size: { type: String },
    quantity: { type: Number, default: 0 }

  });

// This is the Schema for the more complex inventory structure
//   type: { type: String, enum: ['Shirt', 'Sweatshirt', 'Pants', 'Shorts'], required: true },
//   sku: { type: Number, required: true, unique: true},
//   description: { type: String, required: true},
//   image: { type: String },
//   gender: { type: String, enum: ['M', 'F'], required: true },
//   size: [{
//       type: {
//           shirt: { type: String, enum: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'] },
//           sweatshirt: { type: String, enum: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'] },
//           shorts: { type: String, min: 28, max: 46 }, // Width in inches
//           pants: {
//               width: { type: String, min: 28, max: 46 }, // Width in inches
//               length: { type: String, min: 28, max: 42 }, // Length in inches
//           }
//       },
//   }],
//   quantity: { type: Number, default: 0 },



//   type: { type: String, enum: ['Shirt', 'Sweatshirt', 'Pants', 'Shorts'] },
//     gender: { type: String, enum: ['Male', 'Female'] },
//     size: {
//       type: {
//         width: { type: Number, min: 28, max: 46 }, // For pants and shorts
//         length: { type: Number, min: 28, max: 42 } // For pants
//       },
//       // For shirts and sweatshirts
//       enum: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL']
//     },
//     quantity: { type: Number, default: 0 },
//     image: String


const Uniform = mongoose.model('Uniform', uniformSchema);

export default Uniform;
