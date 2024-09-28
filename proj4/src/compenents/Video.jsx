import React from "react";
import VideoCards from "./VideoCards";

function Video() {
  return (
    <div className="bg-white ">
      
      <div className="lg:mx-40 md:mx-10 mx-5 py-10 h-full">
      <p className='lg:text-6xl text-4xl font-bold my-5'>Lastest Videos</p>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[45%] h-full mb-5">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Z8YFiwcrp2E?si=_O4YSDV57q6K4AOk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>


              
            </div>
            <p className="text-4xl my-10  font-bold">
              Dianna Adams visits the Sooto Restaurant | Uncovered Miami
            </p>
            <p className="text-gray">
              A consectetur eget ultrices nec velit purus quam dignissim purus
              gravida aliquam mattis ultrices eget ultricies tincidunt et erat
              enim vitae sollicitudin tellus placerat.
            </p>
          </div>
          
          <div className="lg:w-[50%] w-full ">
            <div className="grid grid-cols-1 gap-5 ">
              <VideoCards
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
                title="Family Dinner - Latea pulvinar scelerisque diam"
                des="Enim imperdiet fames nisl, purus et diam aliquet"
              ></VideoCards>
              <VideoCards
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
                title="Lobortis turpis turpis vehicula laoreet egestas enim ornare"
                des="Enim imperdiet fames nisl, purus et diam aliquet"
              ></VideoCards>
              <VideoCards
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
                title="Tempus quis ac viverra condimentum sit nulla viverra"
                des="Enim imperdiet fames nisl, purus et diam aliquet"
              ></VideoCards>
              <VideoCards
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
                title="Quis mauris egestas enim urna dictum"
                des="Enim imperdiet fames nisl, purus et diam aliquet"
              ></VideoCards>
            </div>
            <button className="white-btn my-3 w-full">View All Videos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
