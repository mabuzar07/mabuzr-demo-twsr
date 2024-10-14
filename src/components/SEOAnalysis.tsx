import React from "react";
import { Tabs, Button } from "antd";
import {
  ArrowUpOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  FieldTimeOutlined,
  FolderOpenOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Loser from "images/loseer.png";
import voice from "images/voice.png";
import volatility from "images/volatility.png";
import Winner from "images/winner.png";
import Entrants from "images/entrants.png";
import Trends from "images/trends.png";
import Location from "images/location.png";
import Performance from "images/performance.png";
import Organic from "images/organic.png";
import Portfolios from "images/portfolios.png";
import Picks from "images/picks.png";

const { TabPane } = Tabs;

const SEOAnalysis = () => {
  return (
    <div className="container w-full flex items-center justify-center p-6">
      <div className="w-full bg-white rounded-lg shadow-lg p-8">
        <Tabs
          defaultActiveKey="1"
          className="text-lg"
          tabBarGutter={30}
          size="large"
          centered
        >
          <TabPane
            tab={
              <Button type="default" className="font-semibold p-6">
                <ArrowUpOutlined className="text-sm text-success" rotate={45} />
                Winners & Losers
              </Button>
            }
            key="1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="py-8 flex flex-col justify-center ">
                <h2 className="text-3xl font-bold text-bodyTextColor">
                  See which websites are winning and losing rank on your
                  keywords
                </h2>
                <ul className="mt-4 space-y-3 text-bodyTextColor text-lg">
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      View the biggest rank movers over custom time periods
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      Sort by share of voice, curve, volatility scores
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      Analyze shifts in specific categories and niches
                    </span>
                  </li>
                </ul>
                <Button type="primary" className="mt-6 w-36 bg-blue-600">
                  Get Started
                </Button>
              </div>

              {/* Right Column Content */}
              <div className="relative p-4 ">
                <img className="relative mt-10" src={Loser} alt="Winner" />
                <img
                  className="absolute -top-1 left-1/3"
                  src={Winner}
                  alt="Winner"
                />
              </div>
            </div>
          </TabPane>

          <TabPane
            tab={
              <Button type="default" className="font-semibold p-6">
                <BulbOutlined className="text-sm text-success" />
                Leaderboards
              </Button>
            }
            key="2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="py-8 flex flex-col justify-center ">
                <h2 className="text-3xl font-bold text-bodyTextColor">
                  See the market leaders for your niche, website type, and
                  business model.
                </h2>
                <ul className="mt-4 space-y-3 text-bodyTextColor text-lg">
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      View top performers by category, niche, site type
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Compare leaders across different SEO metrics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      Identify dominant websites for your specific landscape
                    </span>
                  </li>
                </ul>
                <Button type="primary" className="mt-6 w-36 bg-blue-600">
                  Get Started
                </Button>
              </div>

              {/* Right Column Content */}
              <div className="relative p-4 ">
                <img className="relative mt-10" src={volatility} alt="Winner" />
                <img
                  className="absolute -top-8 -left-1/3"
                  src={voice}
                  alt="Winner"
                />
              </div>
            </div>
          </TabPane>

          {/* Tab Pane 3 */}
          <TabPane
            tab={
              <Button type="default" className="font-semibold p-6">
                <FieldTimeOutlined className="text-sm text-success" />
                New Entrants
              </Button>
            }
            key="3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="py-8 flex flex-col justify-center ">
                <h2 className="text-3xl font-bold text-bodyTextColor">
                  Track new entrants and emerging competitors in real-time
                </h2>
                <ul className="mt-4 space-y-3 text-bodyTextColor text-lg">
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      Discover emerging competitors entering your SEO space
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Analyze how new entrants impact your rankings</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      See which niches are becoming increasingly competitive
                    </span>
                  </li>
                </ul>
                <Button type="primary" className="mt-6 w-36 bg-blue-600">
                  Get Started
                </Button>
              </div>

              {/* Right Column Content */}
              <div className="relative p-4 ">
                <img
                  className="relative mt-10"
                  src={Entrants}
                  alt="Winner"
                  width="500"
                />
                <img
                  className="absolute -top-4 left-1/3"
                  src={Trends}
                  alt="Winner"
                  width="500"
                />
              </div>
            </div>
          </TabPane>

          {/* Tab Pane 4 */}
          <TabPane
            tab={
              <Button type="default" className="font-semibold p-6">
                <GoogleOutlined className="text-sm text-success" />
                {/* <ArrowUpOutlined className="text-sm text-success" rotate={45} /> */}
                Unique SEO Metrics
              </Button>
            }
            key="4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="py-8 flex flex-col justify-center ">
                <h2 className="text-3xl font-bold text-bodyTextColor">
                  Leverage unique SEO metrics to separate signal from noise
                </h2>
                <ul className="mt-4 space-y-3 text-bodyTextColor text-lg">
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Share of voice to track market share</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Volatility score to measure rank shifts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Google score to evaluate Google presence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Curve score to highlight outperformers</span>
                  </li>
                </ul>
                <Button type="primary" className="mt-6 w-36 bg-blue-600">
                  Get Started
                </Button>
              </div>

              {/* Right Column Content */}
              <div className="relative p-4 ">
                <img
                  className="relative mt-10"
                  src={Location}
                  alt="Winner"
                  width="500"
                />
                <img
                  className="absolute !top-32 !left-20"
                  src={Performance}
                  alt="Winner"
                  width="500"
                />
                <img
                  className="absolute !top-62 !left-32"
                  src={Organic}
                  alt="Winner"
                  width="500"
                />
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <Button type="default" className="font-semibold p-6">
                <FolderOpenOutlined className="text-sm text-success p-0" />
                {/* <ArrowUpOutlined className="text-sm text-success" rotate={45} /> */}
                Portfolios
              </Button>
            }
            key="5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="py-8 flex flex-col justify-center ">
                <h2 className="text-3xl font-bold text-bodyTextColor">
                  Create portfolios to monitor websites, categories, and more
                </h2>
                <ul className="mt-4 space-y-3 text-bodyTextColor text-lg">
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Monitor domains or individual URLs in one place</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>
                      Track search visibility across entire categories
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleOutlined className="text-blue-500 mt-1" />
                    <span>Understand how rankings shift across locations</span>
                  </li>
                </ul>
                <Button type="primary" className="mt-6 w-36 bg-blue-600">
                  Get Started
                </Button>
              </div>

              {/* Right Column Content */}
              <div className="relative p-4 ">
                <img
                  className="relative mt-10"
                  src={Portfolios}
                  alt="Winner"
                  width="500"
                />
                <img
                  className="absolute top-60 left-28"
                  src={Picks}
                  alt="Winner"
                  width="500"
                />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default SEOAnalysis;
