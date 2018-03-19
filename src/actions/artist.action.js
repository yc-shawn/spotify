import axios from 'axios';

export const SET_ARTIST = "SET_ARTIST"
export function setArtist(id){
  console.log('set artist id:', id);

  const getPayload = (id) => new Promise((resolve, reject) => {
    axios
      .get(`https://api.spotify.com/v1/artists/${id}`)
      .then(artistRes => {
        axios
          .get(`https://api.spotify.com/v1/artists/${id}/albums`)
          .then((res) => {
            let artist = artistRes.data;
            artist.albums = res.data;
            resolve(artist);
          })
      })
      .catch(err => reject(err));
  });

  return {
    type: SET_ARTIST,
    payload: getPayload(id)
  }
}
