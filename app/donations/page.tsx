import Donations from "@/components/Donations";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donations",
  description: "",
};

const DonationsPage = () => {
  return (
    <>
        <Breadcrumb
            pageName="Donations"
            description=""
        />

        <div class="w-full p-0 px-10 m-0">
            <Donations />
        </div>
    </>
  );
};

export default DonationsPage;
