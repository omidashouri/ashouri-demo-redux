import React from "react";
import {useDispatch, useSelector} from "react-redux";
import storiesReducer from "./storiesReducer";

function Homepage() {
    const userObj = useSelector(store => store.usersReducer);
    const postObj = useSelector(store => store.postsReducer);
    const storyObj = useSelector(store => store.storiesReducer);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count of users: {userObj.usercount.length}</h2>
            <h2>Count of posts: {postObj.postcount.length}</h2>
            <h2>Count of stories: {storyObj.storycount.length}</h2>
            <button onClick={(e)=>dispatch({type:'ADD_USER'})}>Add User</button>
            <button onClick={(e)=>dispatch({type:'ADD_POST'})}>Add Post</button>
            <button onClick={(e)=>dispatch({type:'ADD_STORY'})}>Add Story</button>
        </div>
    )
}

export default Homepage;