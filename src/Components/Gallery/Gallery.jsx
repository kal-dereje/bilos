import { useState } from "react";
import Fullphoto from "./Fullphoto";

import Photo, { pictures } from "./Photos";

function Gallery() {
  const [hide, setHide] = useState(true);
  const [index, setIndex] = useState(0);

  const handelHideClick = () => {
    setHide((prev) => !hide);
  };

  const inc = () =>
    setIndex((prev) => (prev < pictures.length - 1 ? ++prev : prev));
  const dec = () => setIndex((prev) => (prev > 0 ? --prev : prev));
  const showFullphoto = (e, i) => {
    setIndex(i);
    setHide((prev) => !hide);
  };
  return (
    <div id="Gallery" className="h-screen w-full ">
      <Photo
        onclick={showFullphoto}
        indexOfPic={index}
        incremnt={inc}
        decremnt={dec}
      />
      {!hide && (
        <Fullphoto
          onclick={handelHideClick}
          indexOfPic={index}
          pictures={pictures}
          incremnt={inc}
          decremnt={dec}
        />
      )}
    </div>
  );
}

export default Gallery;
