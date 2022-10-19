import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {firestore} from '../firebase';


function Home(){

    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        firestore
        .collection('posts')
        .get()
        .then((snapshots)=>{
            const posts = snapshots.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                };
            });

            console.log(posts);
            setPosts(posts);
        });
    },[]);
    
    return (
        <div className="home">
            <h1>Tech blog</h1>
            <div id="blog-by">Dhirendra</div>

            {posts.map((post,index)=>{
                return(
                    <div className="post" key={`post-${index}`}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.subTitle}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;