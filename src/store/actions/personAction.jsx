export { removeperson } from "../reducers/personSlice";
import { data } from "autoprefixer";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`person/${id}/external_ids`);
    const combined_credits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let details = {
      detail: detail.data,
      externalid: externalid.data,
      combined_credits: combined_credits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadperson(details));
    // console.log(details);
  } catch (error) {
    console.log("error:", error);
  }
};
