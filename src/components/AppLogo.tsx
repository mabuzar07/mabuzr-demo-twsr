import LogoPart1 from "images/site-logo.png";
import LogoPart2 from "images/logo-arrow.png";

export const AppLogo = () => {
  return (
    <div className="application-logo flex">
      <div className="part1 mr-4">
        <img src={LogoPart1} alt="SiteCurve" height="49.73px" width="177px" />
      </div>
      <div className="part2 self-center">
        <img src={LogoPart2} alt="SiteCurve" height="28" width="12" />
      </div>
    </div>
  );
};
