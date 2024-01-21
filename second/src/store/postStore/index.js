import { createContext ,useReducer} from "react";
import{v4 as uuidv4} from "uuid"

 export const PostContex=createContext({
    postData:[],
    addItem:()=>{},
    deleteItem:()=>{
        
    }
})





const poorRedux=(currentList,action)=>{
    let result=currentList
    if(action.type==="delete"){
        result=currentList.filter(each=>each.id !==action.payload.id)


    } else if(action.type==="add"){
        result=[action.payload,...currentList]

    }
    return result 

}

export const PostProvider=({children})=>{
    const[postData,dispatchData]=useReducer(poorRedux,[])


    const addItem=(username,title,description,react,tags)=>{
        
        dispatchData({
            type:"add",
            payload:{id:uuidv4(),username,title,content:description,reaction:react,tags

            }
        })

    }
    
    const deleteItem=(id)=>{
        console.log(id)
        dispatchData({
            type:"delete",
            payload:{
                id

            }
        })

    
    }

    return(
        <PostContex.Provider value={{postData,addItem,deleteItem}}>
            {children}

        </PostContex.Provider>
    )
}



