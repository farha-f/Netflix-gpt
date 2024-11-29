import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingmovies} from "../utils/movieSLice"
const useNowPlaying=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies = async () => {
        try {
          const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
          const json = await data.json();
          console.log(json.results);
          dispatch(addNowPlayingmovies(json.results))
            .then(res => console.log(res))
            .catch(err => console.error(err, "json error here"));
        } catch (err) {
          console.error(err, "Fetch error");
        }
      };
    useEffect(()=>{
        getNowPlayingMovies()
    },[]);
}
export default useNowPlaying;
