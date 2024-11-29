import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying"
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondarContainer";

const Browse=()=>{
    useNowPlaying();
    return(
        <div>
            <Header />
            <MainContainer/>
            <SecondaryConatiner/>
        </div>
    )

}
export default Browse;