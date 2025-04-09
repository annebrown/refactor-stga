import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { Blog } from "@/types/blog";

import { HeartIcon } from '@heroicons/react/24/solid';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogPage0001 = () => {
  return (
    <>
      <div class="pb-[60px] pt-[75px]">
        <div class="container">
          <div class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-8/12">
              <div>
                <h2 class="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                Save the Grove Again Information Session- Planting the Seed
                </h2>

                
                    <div class="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                        <div class="flex flex-wrap items-center">
                            <p class="text-base font-medium text-black">
                                September 05, 2024
                            </p>
                        </div>
                        <div class="mb-0">
                            <a
                            href="#0"
                            class="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                            >
                            Event
                            </a>
                        </div>
                    </div>

                    <div class="text-black">
                    <p class="pb-1"><strong>Event Title:</strong> Save the Grove Again Information Session- Planting the Seed</p>
                    <p class="pb-1"><strong>Event Date:</strong> September 7, 2024 at 1:00pm</p>
                    <p class="pb-1"><strong>Event Location: </strong>Emmanuel Anglican Church</p>
                    <p class="pl-5">(corner of Harrington and Ottawa Street, Arnprior ON)</p><br></br>
                    <p><strong>Event Desription:</strong></p><br></br>
                    <p class="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Join us for an information session for the Save the Grove Again campaign, our first event in support of sharing the proposed repurposing of the land once known as Deer Park (known today as Galilee Center grounds). This event is curated by a group of dedicated local volunteers that want to share the love for this ecological and historical piece of land with guest speakers and offerings for community participation in the form of lawn signs, buttons and pamphlets. Come out on September 7th to show your support and help sow the seeds for a more sustainable solution.
                    </p>
                    <div class="relative mb-10 rounded-t-2xl rounded-b-md">

                        <Image
                            src="/images/blog/blog0001/blog1.webp"
                            alt="Trees viewed through leafy border, with text: We need your help to save the grove again, plus Event as blog post category"
                            width="500"
                            height="375"
                            class=" aspect-auto max-w-22 h-auto object-cover"
                        />
                    </div>

                    <p class="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Whether you can join us in person or not on September 7th, please consider supporting this cause in the following ways:
                    </p>

                    <span class="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        <ul>
                            <li>- 🗞️Subscribe to our <a class="text-green-600" href="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</a></li>
                            <li>- 💰Make a <a class="text-green-600"  href="https://savethegroveagain.com/donations">donation</a></li>
                            <li>- 🖋️Sign our <a class="text-green-600"  href="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120">online petition</a></li>
                            <li>- 🏡Place a lawn sign in your yard.</li>
                            <li>- 👍Wear a button to show your support.</li> 
                        </ul>
                    </span>

                        <p class="mb-10 pt-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Contact Information:</p>
                        <p>
                        For more information, to ask a question, request a lawn sign, or obtain a button, please contact one of our dedicated volunteers at: 
                        </p>
                        <p class="text-center pb-10 pt-5 weight-bold text-[#165D8F] text-3xl">
                            <a href="mailto:savethegroveagain@gmail.com" class="text-green-600">
                                savethegroveagain@gmail.com
                            </a>
                        </p> 
                        <div class="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                            <p class="text-center text-base font-medium italic text-black">
                            🌱Small Steps, 🌳Big Impact!
                            </p>
                        </div>
                        <p class="pb-5">Together we can find a better way, </p>
                        <p>The volunteers of the&nbsp;
                    
                            <HeartIcon class="size-5 inline text-red-800" />Save the Grove Again Campaign<HeartIcon class="size-5 inline text-red-800" />
                            
                        </p><br></br>
                  
                 <div class="container mx-auto w-full">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage0001;
