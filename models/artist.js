
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const artistSchema = new Schema (
    {
        name: { type: String, required : true},
        artworks: [   /// this property name is what is referenced with the populate method!!!
            {
                type: Schema.Types.ObjectId, //  nested objects coming from mongodb through mongoose
                ref: 'Artwork'  // ref value must be equal to the exported model name from records model
            }              
        ],
        medium: { type: Array, required : true},
    },
    {timestamps: true} 
)


module.exports = mongoose.model('Artist', artistSchema)