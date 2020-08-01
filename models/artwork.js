// const db = require('../db')
// destructuring an object with the { }, automatically assigns the object's property into the variable within the brackets
// const { Schema, model } = db
// above two lines are same as: 
// const mongoose = require('mongoose') 
// const Schema = mongoose.Schema 
// const model = mongoose.model

const mongoose = require('mongoose');
const Schema = mongoose.Schema


const artworkSchema = new Schema (
    {
        title: { type: String, required : true},
        artist : [
            {
                type: Schema.Types.ObjectId,
                ref: 'Artist',
                required: true,
            }
        ],
        year: { type: Number, required: false },
        materials: { type: Array, required: false },
        notes: { type: String, required : false},
        imageUrl: { type: String, required : true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Artwork', artworkSchema)
