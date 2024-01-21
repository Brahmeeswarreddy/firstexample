import { useRef,useContext } from "react"
import "./index.css"
import { PostContex } from "../../store/postStore"
const PostForm=()=>{
    const{addItem}=useContext(PostContex)
    const usernameElement=useRef()
    const titleElement=useRef()
    const descriptionElement=useRef()
    const reactElement=useRef()
    const tagElement=useRef()

    const onSubmitForm=(event)=>{
        event.preventDefault()

        const username=usernameElement.current.value
        const title=titleElement.current.value
        const description=descriptionElement.current.value
        const react=reactElement.current.value
        const tags=tagElement.current.value.split(" ")
        addItem(username,title,description,react,tags)

    }

    return(
        <center  className="container" style={{width:"40%",marginTop:"40px"}}>
        <form onSubmit={onSubmitForm}>
        <div className="mb-3">
    <label for="exampleInputPassword1"  className="form-label">UserName</label>
    <input type="text" ref={usernameElement} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" ref={titleElement} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">description</label>
    <input type="text" ref={descriptionElement} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">number of people reacted</label>
    <input type="text" ref={reactElement} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Tags</label>
    <input type="text" ref={tagElement} className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">post</button>
</form>
</center>

    )
}

export default PostForm 