"use client";


import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <divclass="z-10 w-full p-0 m-0 mt-8 mx-auto pb-10">
        <div class="w-full container m-0 p-0 object-center  mx-auto">
            <h2 class="text-4xl p-5 pt-14 pb-10 text-center text-black font-bold">
                What&apos;s at Stake
            </h2>

            <div class="w-full mb-8">
                <iframe 
                    width="897" height="506" 
                    src="https://www.youtube.com/embed/tEgtT1LX-Sk"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    class="size-full aspect-video" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>

    </section>
  );
};

export default Video;
