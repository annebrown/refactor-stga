import Flyer from "@/components/Flyer";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flyer",
  description: "",
};

const FlyerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Flyer"
        description=""
      />
      <div class="w-full p-0 px-10 m-0">
        <Flyer />
      </div>
    </>
  );
};

export default FlyerPage;
