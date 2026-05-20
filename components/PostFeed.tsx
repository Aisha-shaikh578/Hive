'use client'

import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import PostInput from './PostInput'
import { collection, onSnapshot, orderBy, query, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'
import { db } from '@/firebase'

const PostFeed = () => {
  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([]);

  useEffect(() => {
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

  const unsubscribe = onSnapshot(q, (snapShot) => {
  const snapShotDocs = snapShot.docs

  setPosts(snapShotDocs)
  })

  return unsubscribe
  },[])

  return (
    <div className='flex-grow max-w-2xl'>
      <div className='py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold'>
        Home
      </div>
       
       <PostInput />

        {posts.map(post => <Post 
         key={post.id}
         data={post.data()}
        />)}

       
    </div>
  )
}

export default PostFeed
