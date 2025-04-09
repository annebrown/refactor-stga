import divTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <div id="features" class="bg-green-400 relative clear-both pt-5 ml-1.5 mr-3 rounded-lg mb-5">
        <div class="container">
          <SectionTitle
            title="Paving Paridise"
            paragraph="What's at Stake"
            center
          />

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 pb-5">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
