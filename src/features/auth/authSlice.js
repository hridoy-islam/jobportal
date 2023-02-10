import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import auth from '../../firebase/firebase.config'

const initialState = {
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: "",
}

export const createUser = createAsyncThunk('auth/createuser', async({email, password})=> {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email;
})

export const loginUser = createAsyncThunk('auth/loginuser', async({email, password}) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout : (state)=> {
            
        }
    },
    extraReducers : (builder) => {
        builder.addCase(createUser.pending, (state)=> {
            state.isLoading = true;
            state.isError = false;
            state.error = "";
        })
        .addCase(createUser.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.isError = false;
            state.error = "";
            state.email = payload;
        })
        .addCase(createUser.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(loginUser.pending, (state)=> {
            state.isLoading = true;
            state.isError = false;
            state.error = "";
        })
        .addCase(loginUser.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.isError = false;
            state.error = "";
            state.email = payload;
        })
        .addCase(loginUser.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;