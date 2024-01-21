import { useContext } from "react"
import PostItem from "../Postitem"
import { PostContex } from "../../store/postStore"

const PostList=()=>{
    const {postData} = useContext(PostContex)
    console.log(postData)
    return(
        <>
        { postData.length===0?<div style={{marginTop:"50px"}}>
            <img style={{width:"50%",borderRadius:"30px"}} src="https://res.cloudinary.com/dxtd19nyl/image/upload/v1694741258/wp3327524-wallpapers-hd-movies_gxmhng.jpg" alt="iron"/>
            <h1>nothing is added</h1>
        </div>:
            postData.map(item=><PostItem key={item.id} item={item}/>)
        }</>
        
        
    )
}
export default PostList 