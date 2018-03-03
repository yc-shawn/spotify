import axios from 'axios';

export const SET_ALBUM = "SET_ALBUM"
export function setAlbum(id){
  console.log('set ablum id:', id);

  const getPayload = (id) => new Promise((resolve, reject) => {
    axios
      .get(`https://api.spotify.com/v1/albums/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });

  return {
    type: SET_ALBUM,
    payload: getPayload(id)
  }
}
