import { useHistory } from "react-router"

function Post({postData}) {
   const histroy = useHistory()
   return (
      <>
      <div onClick={() => histroy.push(`post/${postData.id}`)}>
         <p>{postData.userId}</p>
         <p>{postData.body}</p>
         <p>{postData.title}</p>
         <hr />
      </div>
      </>
   )
}

export default Post