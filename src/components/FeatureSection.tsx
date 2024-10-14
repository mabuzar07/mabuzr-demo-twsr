import SEOAnalysis from "./SEOAnalysis";

export const FeatureSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20">
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-20">
          <h1 className="text-bodyTextSecondary font-bold text-5xl leading-[#58px]">
            Gain an advantage over your competitors with next-level SEO
            intelligence
          </h1>
          <p className="text-bodyTextDefault text-xl py-3 pb-6">
            Click the tabs below to see what makes SiteCurve standout from other
            SEO tools.
          </p>
        </div>
        <SEOAnalysis />
      </div>
    </>
  );
};
