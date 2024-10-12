import Post from "./Post";
import PostSkeleton from "../../skeletons/PostSkeleton";
import {posts, admin, user} from "@/dummy-data";

const Posts = () => {


  const isLoading = false;

  return (
    <div className="">
      {!isLoading && posts.map(post => (
        <Post key={post.id} post={post} admin={admin} isSubscribed={user.isSubscribed}/>
      ))}
      {isLoading && (
        <div className="mt-10 px-3 flex flex-col gap-10">
         {[...Array(3)].map((_,i)=>(
          <PostSkeleton key={i} />
         ))} 
        </div>
      )}
      {!isLoading && posts.length === 0 && (
        <div className="mt-10 px-3">
          <div className="flex flex-col items-center space-y-3 w-full md:w-3/4 mx-auto">
            <p className="text-xl font-semibold">No Posts Yet</p>
            <p className="text-center text-xl font-semibold text-primary">stay tuned for more posts</p>
            <p className="text-center text-sm">You can subscribe to access exlusive content when its available.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Posts;
