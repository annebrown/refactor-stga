"use client";


import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <divclass="z-10 w-full p-0 m-0 mx-auto">
        <div class="w-full container m-0 p-0 mx-auto">

            <div class="rounded-md w-full mx-auto">

                <iframe width="1221" height="687" src="https://www.youtube.com/embed/CY2YkJNFaf0" title="A Call to the Community: Save the Grove Again Chair Lacey Smith speaks from the heart" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                {/* <iframe width="1221" height="687" src="https://www.youtube.com/embed/CY2YkJNFaf0" title="A Call to the Community: Save the Grove Again Chair Lacey Smith speaks from the heart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                {/* <iframe 
                    width="897" height="506" 
                    src="https://www.youtube.com/embed/tEgtT1LX-Sk"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    class="size-full aspect-video" 
                    allowFullScreen>
                </iframe> */}
            </div>
        </div>

    </section>
  );
};

export default Video;
