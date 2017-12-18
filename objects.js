var playlist = {theBeatles: 'Hey Jude'};

function updatePlaylist(playlist, artistName,songTitle){
  Object.assign({}, playlist, {[artistName]: songTitle});
}