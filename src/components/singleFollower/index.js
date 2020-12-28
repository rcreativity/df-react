import React from 'react'

export default function SingleFollower({follower}) {
  const { login, avatar_url } = follower;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={avatar_url ? avatar_url : 'http://via.placeholder.com/150'} alt={`${login} Avatar`} />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
      </div>
    </div>
  )
}
