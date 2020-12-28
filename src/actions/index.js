import axios from 'axios'

export const API_REQUEST = "API_REQUEST"
export const API_SUCCESS = "API_SUCCESS"
export const API_FAILED = "API_FAILED"

export default function getGithubFollowersList(userName = "bradtraversy"){
  return (dispatch) => {
    dispatch({
      type: API_REQUEST,
    })
     axios.get(`https://api.github.com/users/${userName}/followers?per_page=50`)
      .then(({data})=> {
        console.log(data);
        dispatch({
          type: API_SUCCESS,
          payload: {
            data,
            userName
          }
        })
      }).catch((error)=> {
        console.log(error);
        dispatch({
          type: API_FAILED,
        })
      })
  };
}
