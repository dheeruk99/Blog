
import {useFormInput} from '../hooks';
import {firestore} from '../firebase';

function CreatePost(){

    // const [title, setTitle] = useState();
    // const [subTitle, setSubTitle] = useState();
    // const [content, setContent] = useState();


    const title = useFormInput();
    const subTitle = useFormInput();
    const content = useFormInput();
    

    function handleSubmit(e){
        e.preventDefault();
        
        
        firestore.collection('posts').add({
            title:title.value,
            subTitle:subTitle.value,
            content:content.value,
            createdAt: new Date(),
        })
        title.setValue('');
        subTitle.setValue('');
        content.setValue('');
    }

    return(
        <div className='create-post'>
            <h1>Create post</h1>

            <form onSubmit={handleSubmit}>

                <div className='form-field'>
                    <label>Title</label>
                    {/* <input value={title} onChange={(e)=> setTitle(e.target.value)}/> */}
                    <input {...title}/>
                </div>


                <div className='form-field'>
                    <label>Sub Title</label>
                    {/* <input value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}
                    <input {...subTitle}/>
                </div>

                <div className='form-field'>
                     <label>Content</label>
                     <textarea style={{wrap:'hard'}} {...content}></textarea>
                </div>

                <button className='create-post-btn'>Create Post</button>
            </form>
        </div>
    );
        
}


export default CreatePost;