import React from 'react'

export default function GetUserFollowersForm({getUserFollower, inputEl}) {
  return (
    <form className="form-inline" onSubmit={getUserFollower}>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="userName" className="sr-only">bradtraversy</label>
        <input type="text" ref={inputEl} className="form-control" id="userName" placeholder="bradtraversy" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Get User Followers</button>
    </form>
  )
}
