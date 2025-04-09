import SectionTitle from "../common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

let OnlyLatest = () => {
    return (
        <section
            id="blog"
            class="bg-gray-light py-20 mb-5"
        >
            <div class="container w-full mx-auto">
                <SectionTitle
                    title="Latest News"
                    paragraph=""
                    center 
                />


                
                <div class="w-full mx-auto">
                    <div 
                        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 place-content-stretch"
                    >                
                        {
                        blogData.map((item, index) => {
                            let len=blogData.length;
                            if ( item.id >= len - 2) {
                                return (

                                    <div key={item.id} class="w-full">
                                            <SingleBlog blog={item} />
                                    </div>
                                );
                            };
                        })}
                    
                    </div>
                </div>
             </div>           
        </section>
    );
};


export default OnlyLatest;
  
