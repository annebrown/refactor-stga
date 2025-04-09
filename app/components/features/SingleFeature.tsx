import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { paragraph } = feature;
  return (
    <div class="flex items-center">
      <div class="w-full bg-green-600 rounded-lg">
        <p class="text-base font-medium leading-relaxeds text-white p-5">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
