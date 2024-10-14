import { CreditCardOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import HeroImage from "images/hero-image.png";
export const HeroSection = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        {/* <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tl from-white to-blue-50 transform -skew-y-3 origin-top-right"></div> */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-20">
          <h1 className="text-6xl font-extrabold text-bodyTextColor leading-[#65px]">
            Discover Who’s Winning and Losing in SEO and Why
          </h1>
          <p className="mt-4 text-lg text-bodyTextColor">
            Spot winning and losing websites across your competitive landscape
            in different niches, website types, and business models.
          </p>
          <div className="mt-6 flex !md:flex-col justify-center space-x-4">
            <div>
              <Button
                type="primary"
                className="bg-secondary hover:bg-secondary p-6"
              >
                Create Landscape - It's Free
              </Button>
            </div>
            <div>
              <Button type="default" className="p-6">
                Schedule Demo
              </Button>
            </div>
          </div>
          <p className="mt-4 text-lightGrey text-sm">
            <CreditCardOutlined className="mr-2" />
            No Credit Card Required
          </p>
        </div>
        <div className="container hero-image">
          <img src={HeroImage} alt="" className="w-screen" width="auto" />
          <Typography className="text-lg text-center mt-2">
            <SearchOutlined className="mr-2" /> Discover existing landscapes:
            <Button
              type="link"
              className="pr-0 pl-1 text-lg text-secondary font-medium"
            >
              Real Estate Agents
            </Button>
            ,
            <Button
              type="link"
              className="pr-0 pl-1 text-lg text-secondary font-medium"
            >
              Credit Cards
            </Button>
            ,
            <Button
              type="link"
              className="pr-0 pl-1 text-lg text-secondary font-medium"
            >
              Lawyers
            </Button>
          </Typography>
        </div>
      </div>
    </>
  );
};
