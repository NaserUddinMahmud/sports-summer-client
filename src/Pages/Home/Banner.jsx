import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <Fade>
      <div className="">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
              className="w-full  max-h-screen"
            />
            <div className="absolute flex  justify-center  bg-gradient-to-r from-gray-500 via-black to-gray-500 opacity-50 h-full w-full">
              <h2 className="text-5xl font-bold text-white pt-64">
                Discover Your Inner Sportsman
              </h2>
            </div>
            <div className="absolute flex gap-5 justify-center transform -translate-y-1/2 left-5 right-5 bottom-2">
              <a href="#slide4" className="btn btn-square">
                ❮
              </a>
              <a href="#slide2" className="btn btn-square">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-full max-h-screen"
            />
             <div className="absolute flex  justify-center  bg-gradient-to-r from-gray-500 via-black to-gray-500 opacity-50 h-full w-full">
              <h2 className="text-5xl font-bold text-white pt-64">
                This Summer
              </h2>
            </div>
            <div className="absolute flex gap-5 justify-center transform -translate-y-1/2 left-5 right-5 bottom-2 ">
              <a href="#slide1" className="btn btn-square">
                ❮
              </a>
              <a href="#slide3" className="btn btn-square">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-full max-h-screen"
            />
             <div className="absolute flex  justify-center  bg-gradient-to-r from-gray-500 via-black to-gray-500 opacity-50 h-full w-full">
              <h2 className="text-5xl font-bold text-white pt-64">
                With Sports Summer
              </h2>
            </div>
            <div className="absolute flex gap-5 justify-center transform -translate-y-1/2 left-5 right-5 bottom-2">
              <a href="#slide2" className="btn btn-square">
                ❮
              </a>
              <a href="#slide4" className="btn btn-square">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1007&q=80"
              className="w-full max-h-screen"
            />
             <div className="absolute flex  justify-center  bg-gradient-to-r from-gray-500 via-black to-gray-500 opacity-50 h-full w-full">
              <h2 className="text-5xl font-bold text-white pt-64">
                Join Today
              </h2>
            </div>
            <div className="absolute flex gap-5 justify-center transform -translate-y-1/2 left-5 right-5 bottom-2">
              <a href="#slide3" className="btn btn-square">
                ❮
              </a>
              <a href="#slide1" className="btn btn-square">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Banner;
