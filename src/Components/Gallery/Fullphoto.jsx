import { RxCross1 } from "react-icons/rx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Fullphoto({ onclick, indexOfPic, pictures, incremnt, decremnt }) {
  let touchStartX = 0;
  let touchEndX = 0;
  const checkDirection = () => {
    if (touchEndX < touchStartX) incremnt();
    else if (touchStartX < touchEndX) decremnt();
  };
  return (
    <div
      id="Fullpciture"
      className="fixed top-0 h-full w-full bg-black z-[100] bg-opacity-90 flex items-center justify-between "
    >
      <button onClick={decremnt}>
        <AiOutlineLeft size={32} className="text-white" />
      </button>
      <img
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
      <button onClick={incremnt}>
        <AiOutlineRight color="white" size={40} />
      </button>
      <button className="fixed right-10 top-10" onClick={onclick}>
        <RxCross1 size={32} className=" text-slate-300 hover:text-white " />
      </button>
    </div>
  );
}

export default Fullphoto;
