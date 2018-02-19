export const SET_AUTH = "SET_AUTH"
export function setAuth(authObj){
  return {
    type: SET_AUTH,
    payload: authObj
  }
}
