const VideoTitle=({title,overview})=>{
    return(
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/2">{overview}</p>
            <div>
            <button className=" text-black p-3 bg-white  px-5 text-lg bg-opacity-50 rounded-lg">▶ Play</button>
            <button className="mx-2 bg-gray-500 text-black p-3   px-5 text-lg bg-opacity-50 rounded-lg">ℹ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;