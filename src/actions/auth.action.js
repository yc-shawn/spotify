export const SET_AUTH = "SET_AUTH"
export function setAuth(authObj){
  console.log('DO have auth:', authObj);
  return {
    type: SET_AUTH,
    payload: authObj
  }
}

export const NEW_AUTH = "NEW_AUTH"
export function newAuth(hashString){
  let hashs = hashString.replace('#', '').split('&');
  let authObj = {};
  hashs.forEach((pair) => {
    let pairs = pair.split('=');
    authObj[pairs[0]] = pairs[1];
  })
  sessionStorage.setItem('yc_shawn_spotify', JSON.stringify(authObj));
  console.log('GET new auth:', authObj);
  return {
    type: NEW_AUTH,
    payload: authObj
  }
}
