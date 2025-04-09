import { Brand } from "@/types/brand";

import brandsData from "./brandsData";

const Brands = () => {
  return (
    <div class="pt-16">
      <div class="container">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div class="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        class="relative h-10 w-full opacity-70 transition hover:opacity-100"
      >
       <NuxtImage src={imageLight} alt={name} fill class="hidden" />
       <NuxtImage src={image} alt={name} fill class="block" />
      </a>
    </div>
  );
};
