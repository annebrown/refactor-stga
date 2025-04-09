const divTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        class={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 class="mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p class="text-base !leading-relaxed text-black md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default divTitle;
