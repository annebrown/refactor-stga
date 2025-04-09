import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
    return (
      <section
        id="blog"
        class="bg-gray-light py-5 my-5"
      >
        <div class="container w-full mx-auto">
          <SectionTitle
            title="Latest News"
            paragraph=""
            center 
          />


          
        <div class="w-full mx-auto my-20">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 place-content-stretch">


                
                {blogData.map((item) => (
                    <div key={item.id} class="w-full">

                    

                            <SingleBlog blog={item} />


                    </div>
                ))}


            </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
  
