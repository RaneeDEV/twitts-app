import { useHistory } from "react-router"

function Post({postData}) {
   const histroy = useHistory()
   return (
      <>
      <div onClick={() => histroy.push(`post/${postData.id}`)}>
         <p>{postData.user?.name}</p>
         <p>{postData.body}</p>
         <p>{postData.title}</p>
         <p>Comments: {postData.comments.length}</p>
         <hr />
      </div>
      </>
   )
}

export default Post