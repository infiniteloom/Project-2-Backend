# Project 2 Backend Worksheet	

## Description: 
**“Archivista.”** is an app that allows a user to manage their personal art collection or create a wishlist for a future collection through a modern, minimal interface. 

**Archivista** is a combination of the words Archive and Vista, referring to the ability to view one’s art archives from a bird’s eye perspective. 

**Archivista** is primarly used by art collectors of all types but can also be used as a way to pin or save artworks to a wishlist for those who are interested in becoming a collector. Users will be able to add new artists/artworks or browse their existing collection by artist or by artworks. 

Features coming soon: 
- Search by artwork / artist name A-Z
- Sort artworks by user’s personal ratings to bring favorites up to the front 
- Toggle between list view and 'vista' view


## Inspiration: 
- Artsy.com
- Etsy.com 

## Database Design Architecture: 
```
Model #1 for artists {
	name: String,
	artworks: Schema.Types.ObjectId,
			  ref: ‘Artworks’
	medium: Array
}	
```

```
Model #2 for artworks{
	title: String,
	year: Number,
	materials: Array
	artist: Schema.Types.ObjectId,
			ref: ‘Artist’
	rating: Number,
	image: String (url)
}
```


## MVP:
1. Create models for artworks and artists

2. Create controllers for routes, including seed route

3. Create routes for: 
	1) Read/Display all artworks
	2) Create/Add new artwork in collection 
	3) Update/Edit an artwork
	4) Delete an artwork

4. Build express server (completed)

5. Deploy to heroku (completed)



## Post-MVP: 
1. Create extra routes/controllers for sort functionalities:
	1) Artists: A - Z , Z - A
	2) Artwork ratings:  1 - 5, 5 - 1
	3) Date added: newest first, oldest first   [edit the model to inclue dateAdded, mm/dd/yyyy how to sort dates?]

