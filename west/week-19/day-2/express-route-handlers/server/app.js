// Phase 2
const {
	getAllArtists,
	getLatestArtist,
	getArtistByArtistId,
	addArtist,
	editArtistByArtistId,
	deleteArtistByArtistId,
	getAlbumsForLatestArtist,
	getAlbumsByArtistId,
	getAlbumByAlbumId,
	addAlbumByArtistId,
	editAlbumByAlbumId,
	deleteAlbumByAlbumId,
	getFilteredAlbums,
	getSongsByArtistId,
	getSongsByAlbumId,
	getSongBySongId,
	addSongByAlbumId,
	editSongBySongId,
	deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
	console.log("Request Body: ", req.body);
	next();
});

// Get all artists
app.get("/artists", (req, res) => {
	const artists = getAllArtists();
	return res.status(200).json(artists);
});

// Create an artist
app.post("/artists", (req, res) => {
	const { name } = req.body;

	const newArtist = addArtist({ name });

	return res.status(201).json(newArtist);
});

// Get the most recent artist added
app.get("/artists/latest", (req, res) => {
	const latestArtist = getLatestArtist();

	return res.status(200).json(latestArtist);
});

// Get all albums of the latest artist
app.get("/artists/latest/albums", (req, res) => {
	const latestArtistAlbums = getAlbumsForLatestArtist();

	return res.status(200).json(latestArtistAlbums);
});

// DO NOT MODIFY
if (require.main === module) {
	const port = 8000;
	app.listen(port, () => console.log("Server is listening on port", port));
} else {
	module.exports = app;
}
