// /src/components/Join/index.tsx

import Image from 'next/image';

const Join = () => {
  return (
    <>
      <div id="Join" class="clear-both">
        <div class=" w-full z-30 ml-1.5 mr-3 mb-5 pt-2 px-auto py-auto grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 align-items-center">
            <div class="pl-5 py-auto my-auto">
                <p class="m-5 mt-0 text-justify
                text-black
                text-2xs
                xs:text-1xs
                sm:text-xs
                md:text-sm
                lg:text-base
                1xl:text-lg
                ">
                    Join us as we gather together our collective love of this ecological and historical gem to counter the development proposal. Together we can find a better and more sustainable solution that meets the needs of all, including; the Galilee Center, a respected retreat center that has been entrusted with the care of this land for many years; the town’s folk who live nearby or use this area for their physical and spiritual wellbeing; the flora, fauna and fungi of the great and incredibly rare forest known as Gillies Grove; and the developer who needs to find ways to build homes for a growing Ontario population.
                </p>
                <p class=" m-5 text-center
                bold
                text-[#165D8F]
                text-sm
                xs:text-base
                sm:text-lg
                md:text-1xl
                lg:text-2xl
                1xl:text-3xl
                ">
                    Together we can find a better way!
                </p>
                <div class="p-5 mt-10 bg-green-600 rounded-lg hover:bg-sky-200 hover:text-black text-white text-3xl font-extrabold w-fit shadow-md mx-auto">
                    <NuxtLink href="/action"  class="h-full">
                        <button  class="h-full">Get Involved!</button>
                    </Link>    
                 </div>
            </div>
          <div class="m-5">
            <Image
              src="/images/join/6-green-min.jpg"
              alt="Field"
              loading="eager"
              priority
              width={1057}
              height={551}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
