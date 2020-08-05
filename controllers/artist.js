 // const express = require('../db')
const Artist = require('../models/artist.js')
const Artwork = require('../models/artwork.js')
const data = require('../db/artist-data.js')

// Seed Route to populate database
const seed = async (req, res) => {
    res.json(await Artist.create(data))
}

const index = async (req, res) =>{
    try{
        const artists = await Artist.find({})
        res.status(200).json(artists)
    }
    catch (error){
        res.status(400).json(error)
    }
    db.close()
}


// const findArtwork = async (req, res) => {
//     try{
//         const artists = await Artist.find({}).populate('artworks').sort({"firstName": 1})
//         console.log(artists)
//         res.status(200).json(artists)
//     }catch(error){
//         res.status(400).send(error)
//     }
// }



const create = async (req, res)=>{
    try{
        console.count()
        const newArtist = await Artist.create(req.body)
        console.count()
        res.status(200).json(newArtist)
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
    db.close()
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




const update = async (req, res) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate({title: req.params.id})    
        res.status(200).json(updatedArtist)
    }
    catch(error){
        res.status(400).json(error)
    }
    db.close()
}


const destroy = async (req, res) => {
    try{
        const destroyedArtist = await Artist.findByIdAndDelete(req.params.id)
        res.status(200).json(destroyedArtist)
    }
    catch (error) {
        res.status(400).json(error)
    }
    db.close()
}


module.exports = {
    index,
    // findArtist,
    seed,
    create,
    update,
    destroy
}