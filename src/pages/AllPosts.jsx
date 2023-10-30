import React, {useState, useEffect} from 'react'
import appWriteService from '../appwrite/config'
import { Container, Postcards } from '../components'


const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {},[])
    appWriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 xsmall:w-full small:w-6/12 large:w-1/3 big:w-1/4'>
                    <Postcards {...post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts