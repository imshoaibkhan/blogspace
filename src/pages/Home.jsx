import React, { useEffect, useState } from "react";
import appWriteService from "../appwrite/config";
import { Container, Postcards } from '../components'

const Home = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=> {
        console.log('here is', posts)
        appWriteService.getPosts().then((posts) => {
            if (posts)
            setPosts(posts.documents)
        })
    },[])

    if (posts.length === 0) {
        return (
            <div className="min-h-custom w-full py-8 text-center flex items-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

  return (
    <div className="min-h-screen w-full py-8">
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <Postcards {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
};

export default Home;
