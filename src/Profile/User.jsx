import React from 'react'

export default function User({fullName, bio, profession, handleName, version = "16"}) {
  

  return (
    <div >
        
        <img src="./image/user.avif" width="200px" />
        <h3>{fullName}</h3>
        <h3>{bio}</h3>
        <h3>{profession}</h3>
        <form onSubmit={handleName}>
            <button type="submit">Click</button>
        </form>
        <h2>React {version} Documentation</h2>
    </div>
  )
}
