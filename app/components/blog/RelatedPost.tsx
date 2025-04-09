


const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <div class="flex items-center lg:block xl:flex">
      <div class="mr-5 lg:mb-3 xl:mb-0">
        <div class="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
         <NuxtImage src={image} alt={title} fill />
        </div>
      </div>
      <div class="w-full">
        <h5>
          <Link
            href={slug}
            class="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary"
          >
            {title}
          </Link>
        </h5>
        <p class="text-xs font-medium text-black">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
