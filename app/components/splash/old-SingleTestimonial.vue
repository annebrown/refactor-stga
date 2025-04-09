import { Testimonial } from "~~/types/testimonial";


const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { content, initials } = testimonial;

  return (
    <div class="w-full bg-green-600 rounded-lg">
      <p class=" border-b border-body-color border-opacity-10 text-base leading-relaxed p-5 ">
        “{content}
      </p>
      <div class="flex items-center">
        <div class="w-full p-5 pt-0">
          <p class="text-sm">{initials}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
