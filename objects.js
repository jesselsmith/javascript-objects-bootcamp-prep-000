var playlist = {theBeatles: 'Hey Jude'};

function updatePlaylist(playlist, artistName,songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}