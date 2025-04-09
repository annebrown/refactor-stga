// /src/components/Hero/index.tsx

import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        class="z-30 m-0 p-0"
      >
        <div class="w-full h-full z-40 m-0 mt-5 p-0 fill">
          {/* <Image
            class="relative m-0 p-0 rounded-xl w-full"
            src="/images/hero/big-splash.webp"
            alt="Field surrounded by trees"
            loading="eager"
            priority
            width={500}
            height={264}
          /> */}
           <Image
            class="relative m-0 p-0 rounded-xl w-full"
            src="/images/hero/big-postcard.png"
            alt="Postcard - Gilles Grove 10,000 years in the making"
            loading="eager"
            priority
            width={500}
            height={264}
          />
          <div class="mx-4 flex flex-wrap">
            <div class="mx-auto z-40 rounded-full">
              <NuxtLink href="/">
                <Image
                  src="/images/logo/logo_black_small.png"
                  class="absolute top-10 right-10 w-1/5 h-auto"
                  alt="Logo - Trees and water inside a circle"
                  loading="eager"
                  priority
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
