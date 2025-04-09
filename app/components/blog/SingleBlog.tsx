import { Blog } from "@/types/blog";



const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, alt, width, height, paragraph, author, tags, publishDate, blogURL } = blog;
  return (
    <>
      <div class="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two w-full h-full">
        <NuxtLink
          href={blogURL}
          class="relative block aspect-[37/22] w-full"
        >
          <span class="absolute right-1 bottom-1 z-20 inline-block  items-center justify-center rounded-full bg-primary/80 px-4 py-2 text-sm font-semibold capitalize text-black">
            {tags[0]}
          </span>
         <NuxtImage 
            src={image} 
            alt={alt}
            width={width}
            height={height}
            class="w-full"/>
        </NuxtLink>
        <div class="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <NuxtLink
              href={blogURL}
              class="mb-4 block text-xl font-bold text-black hover:text-primary sm:text-2xl"
            >
              {title}
            </NuxtLink>
          </h3>
          <p class="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-black">
            {paragraph}
          </p>
          <div class="flex items-center">
            <p class="text-xs text-black">{publishDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
