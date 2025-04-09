import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "",
};

const FAQPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description=""
      />
      <div class="w-full p-0 px-10 m-0">
        <FAQ />
      </div>
    </>
  );
};

export default FAQPage;
