import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


export const fetchPosts= createAsyncThunk("posts/fetchPosts", async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch("http://localhost:5000/posts");
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const initialState = {records:[], loading: false ,error: null};


export const deletePost = createAsyncThunk("posts/deletePost", async(data, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
         await fetch(`http://localhost:5000/posts/${data.id}`,{method:"DELETE"});
         return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const postSlice =  createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:{
        // fetch posts
        [fetchPosts.pending]: (state)=>{
        state.loading= true;
        state.error=null;
        },
        [fetchPosts.fulfilled]: (state,action)=>{
            state.loading = false;
            state.records = action.payload;
            // console.log(action.payload)
        },
        [fetchPosts.rejected]: (state,action)=>{
            state.loading=false;
            state.error= action.payload;
        },


        // creae post 

        // delete post 

        // edit post 
    }
})

export default postSlice.reducer;