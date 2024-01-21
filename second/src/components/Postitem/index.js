import { useContext } from "react";
import { PostContex } from "../../store/postStore";
import { MdDelete } from "react-icons/md";

const PostItem=({item})=>{
    const{deleteItem}=useContext(PostContex)
    const{id,username,title,content,reaction,tags}=item 

    return(
        <div className="card" style={{width: "25rem",margin:"20px"}}>

  <div className="card-body">
  <span onClick={()=>deleteItem(id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  <MdDelete size={20} />
    <span className="visually-hidden">unread messages</span>
  </span>
  <h5 className="card-title">{username}</h5>
    <h6 className="card-title">{title}</h6>
    <p className="card-text">{content}</p>
    {tags.map(each=> <button type="button" key={each} className="btn btn-primary m-2">{each}</button>)}
    
    <div className="alert alert-primary mt-3" role="alert">
  {reaction}
</div>
  </div>
</div>

    )
}

export default PostItem 