var playlist = {theBeatles: 'Hey Jude'};

function updatePlaylist(playlist, artistName,songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  var playlistToRetun = Object.assign({}, playlist);
  
  delete playlistToReturn.artistName;
  
  return playlistToReturn;
  
}