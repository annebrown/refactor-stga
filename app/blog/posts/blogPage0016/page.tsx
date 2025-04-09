
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Crucial Public Meeting to Sever Land",
  description: "We need everyone present for this one!",
  // other metadata
};

const BlogPage0016 = () => {
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
                            February 1, 2025
                        </p>
                    </div>
                    <div class="mb-0">
                        <a
                        href="#0"
                        class="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            ACTION
                        </a>
                    </div>
                </div>

          
                <p class="text-2xl">
                    <strong>A Crucial Public Meeting to Sever Land</strong>
                </p><br></br>
                <p 
                    class="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    We need everyone present for this one!
                </p>
                
                <div class="aspect-[500/325] mb-8">
                    <Image
                        src="/images/blog/blog0016/blog16.png"
                        alt="Nick Smith Centre Entrance"
                        width="500"
                        height="325"
                        class="self-center"
                    />
                </div>

                <div class="text-black mb-8">
                    <p class="pb-1"><strong>Details</strong></p>
                    <p class="pb-1"><strong>What:</strong> Committee of Adjustment Public Meeting</p>
                    <p class="pb-1"><strong>When:</strong> Wednesday, February 5th at 6:00 PM</p>
                    <p class="pb-1"><strong>Where:</strong>Nick Smith Centre, Community Hall, 77 James Street, Arnprior</p>
                </div>

                <p class="mb-8 text-justify">
                Galilee Mission Centre has made an application with the Town of Arnprior to sever their land at 398 John Street North.  The town’s Committee of Adjustment is tasked with evaluating the application, gathering all necessary information and deciding whether the application will be accepted, denied or held pending more information. This decision could have significant implications for Gillies Grove, a treasured old-growth forest and National Historic Site. 

                </p>

                <p class="mb-8 text-justify">
                The application has sparked public concern with the Save the Grove Again Committee rallying community members to attend the meeting in opposition to the severance. STGA argues that allowing the proposed severance would likely pave the way for development of this ecologically and historically significant land. 
                </p>

                <p class="mb-8 text-justify">
                An important part of this application process is for the town to hold a public meeting. Join us on February 5th at 6:00pm at the Nick Smith Centre for this crucial step in protecting Gillies Grove..

                </p>
                <p class="mb-8 text-justify">
                Here is what you need to know:
                </p>

                <ol class="mb-8">
                    <li class="font-bold">🌲 Everyone is encouraged to attend!</li>
                    <li>🌲 Anyone can make a comment or ask a question at the meeting.</li>
                    <li>🌲 If you do not wish to speak you can send a written comment prior to the meeting (see below)</li>
                    <li>🌲 The applicant will be in attendance and will make a presentation</li>
                    <li class="font-bold">🌲 Wear <span class="text-green-600">green</span> in support of Gillies Grove!</li>
                </ol>

                <p class="mb-1">
                If you wish to submit a comment to this application, you may forwarded it to:

                </p>
                <p class="mb-1">
                <span class="font-bold">Alix Jolicoeur</span>  Secretary-Treasurer, Committee of Adjustment at:
                </p>

                <p class="mb-8">
                (613)-623-4231 or planning@arnprior.ca

                </p>

                <p class="mb-8 text-justify">
                For more information about the Committee of Adjustment meeting, go to the posting on the Town of Arnprior&apos;s website <ULink href="https://www.arnprior.ca/en/news/public-notice-application-for-consent-no-b8-24-398-john-st-n.aspx" class="text-green-600">here</Link>.
                </p>
                
                <div class="aspect-[500/266] mb-8">
                    <Image
                        src="/images/blog/blog0016/blog16b.png"
                        alt="Sandy road through forest meadow"
                        width="500"
                        height="266"
                        class="self-center"
                    />
                </div>

                <p class="pt-8  pb-4 
                text-center text-2xl weight-bold text-[#165D8F]">Together we can find a better way!
                </p>

                <p class="pt-8  pb-8 
                text-center text-2xl weight-bold text-green-600">
                    SHOW UP IN GREEN ON WEDNESDAY!!!
                </p>

            </div>
        </div>

      </div>

    </>
  );
};

export default BlogPage0016;
