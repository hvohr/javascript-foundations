function createCollection(name, description) {
  var collection = {
    name: name,
    description: description,
    tracks: []
  }
  return collection;
}

function createTrack(title = 'unknown', artist = 'unknown', duration = 0) {
  var track = {
    title: title,
    artist: artist,
    duration: duration
  }
  return track;
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`
  }
}

function addTrack(collection, track) {
  collection.tracks.push(track)
  return collection;
}

function getTotalDuration(collection) {
  var sum = 0
  for (var i =0; i < collection.tracks.length; i++) {
    sum += collection.tracks[i].duration
  }
  return sum;
}


function findTracksByArtist(collection, artist) {
 artistTracks = []
  for (var i = 0; i < collection.tracks.length; i++) {
  if (collection.tracks[i].artist === artist) {
    artistTracks.push(collection.tracks[i])
  }
 }
 return artistTracks
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist
}