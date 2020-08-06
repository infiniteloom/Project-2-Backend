const db = require('../db/connection.js')
// does this file use express? 
// const express = require('../db')
const Artist = require('../models/artist.js')
const Artwork = require('../models/artwork.js')
const data = require('../db/artwork-data.js')

// Seed Route to populate database
const seed = async (req, res) => {
    await Promise.all(data.map(async artworkAdd => {
        let artist = await Artist.findOne({name: artworkAdd.artist})
        console.log(artist)
        artworkAdd.artist = artist._id

        const artwork = await Artwork.create(artworkAdd)
        // console.log(artwork)
        await artist.artworks.push(artwork._id)
        await artist.save()
        // console.log(artist)
    }))
    // db.close()
}

// Index Route
const index = async (req, res) =>{
    try{
        const artworks = await Artwork.find({})
        res.status(200).json(artworks)
    }
    catch (error){
        res.status(400).json(error)
    }
    // db.close()
}

// Get One Artist Route
const getOne = async (req, res) => {
    try{
        const artist = await Artwork.findById(req.params.id).populate('artist')
        console.log(artist)
        res.status(200).json(artist)
    }catch(error){
        res.status(400).send(error)
    }
}


// Create Artwork Route 
const create = async (req, res)=>{
    try{
        console.log(req.body)
        const newArtwork = await Artwork.create(req.body)
        console.log(newArtwork)
        res.status(200).json(newArtwork)
    }
    catch(error){
        res.status(400).json(error)
    }
    // db.close()
}


////////////////// HOW TO TEST THIS BY RUNNING NODE CONTROLLERS  //////////////////
// const createArtist = async() =>{
//     try {
//         const newArtist = await Artist.create({
//             name: "Missy Miss",
//             hot100Hits: 10
//         });
//         const allArtists = await Artist.find({})
//         res.status(200).json(newArtist)
//     } catch(error){
//         res.status(400).send(error)
//     }
// }



// Update Artwork Route
const update = async (req, res) => {
    try {
        const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body)  
        console.log(req.body)  
        res.status(200).json(updatedArtwork)
    }
    catch(error){
        res.status(400).json(error)
    }
    // db.close()
}


// Destroy Artwork Route
const destroy = async (req, res) => {
    try{
        const destroyedArtwork = await Artwork.findByIdAndDelete(req.params.id)
        res.status(200).json(destroyedArtwork)
    }
    catch (error) {
        res.status(400).json(error)
    }
    // db.close()
}


module.exports = {
    index,
    seed,
    getOne,
    create,
    update,
    destroy
}