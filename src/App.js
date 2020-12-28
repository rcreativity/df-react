import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getGithubFollowersList from './actions'
import GithubFollowers from './components/GithubFollowers'
import GetUserFollowersForm from './components/Form'
import './App.css';

function App() {
  const [search, setSearch] = useState("")
  const inputEl = useRef(null);

  const dispatch = useDispatch()
  const state = useSelector(state => state);
  console.log(state)

  useEffect(()=>{
    dispatch(getGithubFollowersList())
  }, [])

  const _getUserFollower = (e) => {
    e.preventDefault()
    const name = inputEl.current.value;
    if(name){
      console.log(name)
      dispatch(getGithubFollowersList(name))
    }else {
      alert('Please Enter Name')
    }
  }

  const _searchFollowerList = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const { isLoading, isError, data, userName } = state;
  
  const searchInFollowersList = data.filter(followers =>{
    const nameLowerCase = followers.login.toLowerCase()
    return nameLowerCase.includes(search)
  })

  console.log(searchInFollowersList);

  return (
    <div className="container mt-5">
      <div className="App">
        <div className="row">
          <div className="col-md-9">
            <GetUserFollowersForm getUserFollower={_getUserFollower} inputEl={inputEl} />
          </div>
          <div className="col-md-3">
             <div className="form-group mx-sm-3 mb-2">
                <input type="text" value={search} onChange={_searchFollowerList} disabled={!isLoading && !isError ? false : true} className="form-control" placeholder="search followers list" />
              </div>          
            </div>
        </div>
       
        { isLoading && <h2 className="mt-5">Loading</h2> }
        { isError && <h2 className="mt-5">Error</h2> }
        { searchInFollowersList.length > 0 && <GithubFollowers followers={searchInFollowersList} userName={userName} /> }
        { !isLoading && searchInFollowersList.length === 0 && <h2 className="mt-5">No Followers</h2> }
        { search && searchInFollowersList.length === 0 && <h2 className="mt-5">No Match, Please Again</h2> }
      </div>
    </div>
  );
}

export default App;
