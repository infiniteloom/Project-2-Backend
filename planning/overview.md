# Project 2 Backend Worksheet	

## Description: 
**“Archivista."** is an app that allows a user to manage their personal art collection or create a wishlist for a future collection through a modern, minimal interface. 

**Archivista** is a combination of the words Archive and Vista, referring to the ability to view one’s art archives from a bird’s eye perspective. The Vista view mode is the default mode on site load. 

**Archivista** is primarily used by art collectors of all types but can also be used as a way to pin or save artworks to a wishlist for those who are interested in becoming a collector. Users will be able to add new artworks or browse their existing collection by artist or by artworks. 

Features coming soon: Thumnail with text view mode with sorting functionality to organize artworks by user’s personal ratings, recent -> least recently added, alphabetical by artist, alphabetical by artworks.

## Inspiration: 
- Etsy.com 
- Artsy.com

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


## Backend Repo

[Backend](https://github.com/wjclavell/BackEnd-P2/blob/master/planning_directory/project-worksheet.md)

## User Stories
MVP:
- User visits app to view personal collection of artwork.
- User adds a new artwork to the collection
- User edits an existing artwork to add new information
- User deletes artwork no longer in collection


Post-MVP:
- User organizes the display of the artworks by name a-z, artwork title a-z, timestamps, etc. 


## Wireframes
### Web: 
Intro Page Header with Dropdown Menu:
https://res.cloudinary.com/infiniteloom/image/upload/v1596226311/Unit%2002%20-%20Project%20/Web%20Mockup/Web_Intro_Header_p0mwqr.png

Intro Page, Full Length:
https://res.cloudinary.com/infiniteloom/image/upload/v1596226311/Unit%2002%20-%20Project%20/Web%20Mockup/Web_Intro_Long_fhoj6z.png

Edit Artwork Form:
https://res.cloudinary.com/infiniteloom/image/upload/v1596226311/Unit%2002%20-%20Project%20/Web%20Mockup/Web_Edit_Artwork_Page_ql0db1.png


### Mobile: 
Intro Page Header: 
https://res.cloudinary.com/infiniteloom/image/upload/v1596226225/Unit%2002%20-%20Project%20/Mobile%20Mockup/Mobile_Intro_Header_mwcx49.png

Intro Page, Full Length: 
https://res.cloudinary.com/infiniteloom/image/upload/v1596226225/Unit%2002%20-%20Project%20/Mobile%20Mockup/Mobile_Intro_Long_pl7ojh.png

Intro Page Footer: 
https://res.cloudinary.com/infiniteloom/image/upload/v1596226224/Unit%2002%20-%20Project%20/Mobile%20Mockup/Mobile_Intro_Footer_rbwe9o.png

Edit Artwork Form: 
https://res.cloudinary.com/infiniteloom/image/upload/v1596226253/Unit%2002%20-%20Project%20/Mobile%20Mockup/Mobile_Edit_Artwork_Page_lfcogw.png
