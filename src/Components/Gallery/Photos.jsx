import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import gallery1 from "../../assests/images/gallery/gallery1.jpg";
import gallery2 from "../../assests/images/gallery/gallery2.jpg";
import gallery3 from "../../assests/images/gallery/gallery3.jpg";
import gallery4 from "../../assests/images/gallery/gallery4.jpg";
import gallery5 from "../../assests/images/gallery/gallery5.jpg";
import gallery6 from "../../assests/images/gallery/gallery6.jpg";
import gallery7 from "../../assests/images/gallery/gallery7.jpg";
import gallery8 from "../../assests/images/gallery/gallery8.jpg";

function Photo({ onclick, indexOfPic, incremnt, decremnt }) {
  let touchStartX = 0;
  let touchEndX = 0;
  const checkDirection = () => {
    if (touchEndX < touchStartX) incremnt();
    else if (touchStartX < touchEndX) decremnt();
  };
  return (
    <div className="h-screen w-full">
      <div className="hidden lg:grid grid-cols-4 w-full  ">
        {pictures.map((imgs, index) => {
          return (
            <Images
              img={imgs}
              key={index + 1}
              onclick={(e) => onclick(e, index)}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between lg:hidden w-full relative">
        <button className="absolute left-[1px]" onClick={decremnt}>
          <AiOutlineLeft size={32} color="orange" />
        </button>
        <img
          className="w-full"
          onTouchStart={(e) => {
            touchStartX = e.changedTouches[0].screenX;
          }}
          onTouchEnd={(e) => {
            touchEndX = e.changedTouches[0].screenX;
            checkDirection();
          }}
          draggable="false"
          src={pictures[indexOfPic]}
          alt={"picture" + (indexOfPic + 1)}
        />
        <button className="absolute right-[1px]" onClick={incremnt}>
          <AiOutlineRight color="orange" size={32} />
        </button>
      </div>
    </div>
  );
}

export default Photo;

function Images({ img, onclick }) {
  return (
    <div
      onClick={onclick}
      className="h-60 w-full border-2  border-slate-800 overflow-hidden group cursor-pointer"
    >
      <img
        draggable="false"
        src={img}
        className="h-full w-full group-hover:scale-110 transition-all duration-200 ease-linear"
        alt="images"
      />
    </div>
  );
}

export const pictures = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];
