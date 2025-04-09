import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "News and Events",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Posts"
        description="News and Events"
      />

<div class="py-5 my-5">
        <div class="container">
          <div class="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
              key={blog.id}
              class="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 my-5"
            >
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <div class="-mx-4 flex flex-wrap" data-wow-delay=".15s">
          <div class="w-full px-4">
            <ul class="flex items-center justify-center pt-8">
              <li class="mx-1">
                <a
                  href="#0"
                  class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <li class="mx-1">
                <a
                  href="#0"
                  class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  1
                </a>
              </li>
              <li class="mx-1">
                <a
                  href="#0"
                  class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  2
                </a>
              </li>
              <li class="mx-1">
                <a
                  href="#0"
                  class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  3
                </a>
              </li>
              <li class="mx-1">
                <span class="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                  ...
                </span>
              </li>
              <li class="mx-1">
                <a
                  href="#0"
                  class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  12
                </a>
              </li>
              <li class="mx-1">
                <a
                  href="#0"
                  class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default Blog;
