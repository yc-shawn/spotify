import axios from 'axios';

export const SET_TRACK = "SET_TRACK"
export function setTrack(id){
  console.log('set track id:', id);

  const getPayload = (id) => new Promise((resolve, reject) => {
    axios
      .get(`https://api.spotify.com/v1/tracks/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });

  return {
    type: SET_TRACK,
    payload: getPayload(id)
  }
}
