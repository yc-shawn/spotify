import axios from 'axios';

export const SET_ARTIST = "SET_ARTIST"
export function setArtist(id){
  console.log('set artist id:', id);

  const getPayload = (id) => new Promise((resolve, reject) => {
    axios
      .get(`https://api.spotify.com/v1/artists/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });

  return {
    type: SET_ARTIST,
    payload: getPayload(id)
  }
}
