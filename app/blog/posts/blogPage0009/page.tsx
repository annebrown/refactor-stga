
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gillies Grove Biodiversity Tour",
  description: "Walk the Grove and learn more about this renowned ecosystem",
};

const BlogPage0009 = () => {
  return (
    <>
      <div class="pb-[60px] pt-[75px]">
        <div class="container">

            <div class=
                "mx-auto w-full px-4 md:w-8/12 lg:w-8/12 justify-center"
            >
                <div class="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                    <div class="flex flex-wrap items-center">
                        <p class="text-base font-medium text-black">
                            December 4, 2024
                        </p>
                    </div>
                    <div class="mb-0">
                        <a
                        href="#0"
                        class="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            EVENT
                        </a>
                    </div>
                </div>

          
                    <p class="text-2xl">
                        <strong>Gillies Grove Biodiversity Tour</strong>
                    </p><br></br>
                    <p 
                        class="mb-6 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Walk the Grove and learn more about this renowned ecosystem
                    </p>
                    
                    <div class="mx-auto p-0">
                        <Image
                            src="/images/blog/blog0009/blog9.webp"
                            alt="Autumn Forest"
                            width="500"
                            height="375"
                            class="mx-auto pb-6"
                        />
                    </div>               
                    <p class="mb-8">
                    In collaboration with The Ottawa Field Naturalists&apos; Club, Save the Grove Again is co-hosting a bio-diversity tour of Gillies Grove December 15th. Led by Owen Clarkin, vice president of the OFNC, we will explore the Grove with a focus on its diverse and unique offerings to the natural world, both large and small. Attendees will be taken on a tour of many notable features and will be given the chance to explore the Grove at their own pace. There will be an opportunity for questions and to discuss whatever attendees find of interest as they conduct this wondrous tour.

                    </p>

                    <p class="mb-8">
                    Please note that this will be a rain or shine event so dress according to the weather. Also, please bring a lunch and any refreshments as we will be taking a break in the woods shortly after noon.
                    </p>


                    <p class="mb-8 font-bold">
                        December 15th 10:00am-2:00pm
                    </p>

                    <p class="mb-8">
                        Meet at the <span class="font-bold">Ottawa Street</span> entrance to the Grove @ <span class="font-bold">10:00am</span>
                    </p>
                    <p class="mb-8 font-bold">
                        We hope to see you all there!!
                    </p>


                    <iframe class="mx-auto w-[75%]"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7913.744781574474!2d-76.3584444!3d45.439194400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDI2JzIxLjEiTiA3NsKwMjEnMzAuNCJX!5e1!3m2!1sen!2sca!4v1733227757768!5m2!1sen!2sca" width="500" height="450"  loading="lazy">
                    </iframe>
                
                    <p class="text-center pb-8 text-2xl weight-bold pt-8 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

        
      </div>

    </>
  );
};

export default BlogPage0009;
