const express = require('../db')
const Artwork = require('../models/artwork.js')

const getAllArtworks = async (req, res) =>{
    try{
        const artworks = await Artwork.find({})
        res.status(200).json(artworks)
    }
    catch (error){
        res.status(400).json(error)
    }
}


const createArtworks = async (req, res)=>{
    try{
        const newArtwork = await Artwork.create(req.body)
        res.status(200).json(newArtwork)
    }
    catch(error){
        res.status(400).json(error)
    }
}