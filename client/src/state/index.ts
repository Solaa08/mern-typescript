import { createSlice } from "@reduxjs/toolkit"
import UserModel from "../models/interfaces"

interface InitialStateModel {
    mode: string,
    user: UserModel,
    token: null,
    posts: [],
}

const initialState: InitialStateModel = {
    mode: "light",
    user: [],
    token: null,
    posts: [],
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.user
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends
            } else {
                console.error("user friends does not exist: (")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post
                return post
            })
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setPosts} =
    authSlice.actions
export default authSlice.reducer