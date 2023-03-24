import React,{ useEffect } from "react";
import PostList from "./postList";
import {useDispatch,useSelector} from "react-redux"
import { fetchPosts } from "../state/postSlice";


const Index = ()=>{

const dispatch = useDispatch();
const {records, loading, error} = useSelector((state)=>state.posts)

useEffect(()=>{
  dispatch(fetchPosts())
},[dispatch]);

// console.log(posts);
    return (
        <div>
      <PostList data={records} loading={loading} error={error} />
    </div>
    )
   
}
export default Index;