import heroLogo from "../assets/images/logo.png";
import fbImg from "../assets/images/logo/social_logo/fb-png.png";
import linkImg from "../assets/images/logo/social_logo/linkedin_512_black.png";
import twiImg from "../assets/images/logo/social_logo/twi-png.png";
const Footer = () => {
  return (
    <div className="bg-[#001931] text-base-content p-10 text-center">
      <div className="w-[1600px] mx-auto flex justify-between items-center border-b-1 border-gray-600">
        <div className="flex items-center gap-4">
          <img className="w-12" src={heroLogo} alt="" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg text-white">Social Links</h2>
          <div className="flex justify-center gap-4 mb-2">
            <img
              className="w-7 p-1 bg-white rounded-full"
              src={twiImg}
              alt=""
            />
            <img className="w-7 bg-white rounded-full" src={linkImg} alt="" />
            <img className="w-7 bg-white rounded-full" src={fbImg} alt="" />
          </div>
        </div>
      </div>
      <h3 className="text-lg text-white my-5">
        Copyright © 2025 - All right reserved
      </h3>
    </div>
  );
};

export default Footer;
