import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//statelerin tutulduğu alan
const initialState = {
    news:[],
    loading:false,
    error:false,
}

export const getNews=createAsyncThunk(

  "getNewsFunc",//? action type name

  async()=>{
    const API_KEY=`d8eff9e308cd468b9e30910437fd14f1`
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

    const {data} = await axios(url)
    return

  },
  

)





const newsSlice = createSlice({
  //action creator type
  name: news,
  initialState,
  reducers: {
    clearNews:(state)=>{
        state.news=[]
    },

    //apiden istek atıkdıktan sonra gelen dataya buradan erişiyoruz
    extraReducers:(builder)=>{
      builder.addCase(
        (getNews.pending,(state)=>{
          state.loading = true
        })
      ).addCase(getNews.fulfilled,(state)=>{
        state.news=action.payload,
        state.loading = false
      })
      .addCase(getNews.rejected,(state)=>{
        state.error=true,
        state.loading=false
      })
    }

  }
});

export const {clearNews} = newsSlice.actions

export default newsSlice.reducer