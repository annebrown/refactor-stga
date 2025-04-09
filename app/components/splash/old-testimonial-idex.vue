


<template><div>
    <div class=" bg-green-200 relative z-10 pt-10 pb-2 rounded-lg mt-10 mb-5">
      <h1 class="text-3xl font-bold text-center pb-5 text-black">
        Local Voices
      </h1>
      <p class="text-center pb-7 text-black">What members of the community are saying about the proposed development:</p>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-0 pt-0 px-5 pb-7">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
</div></template>