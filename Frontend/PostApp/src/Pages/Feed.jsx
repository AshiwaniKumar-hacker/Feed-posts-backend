import React, { useState } from 'react'

const Feed = () => {
    const [posts,setPosts]=useState([
        {
            _id:"1",
            image:"https://picsum.photos/600/400",
            caption:"Beautiful Image",
        }
    ]

    )
  return (
    <div>
      <section className='feed-section'>
        {
            posts.length>0?(posts.map((post)=>(<div key={post._id} className='post-card'>
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
                </div>))):(
                    <h1>Np posts avialable.</h1>
                )
        }
      </section>
    </div>
  )
}

export default Feed
