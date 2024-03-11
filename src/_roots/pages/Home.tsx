import {
  home1,
  home2,
  home3,
  home4,
  blog1,
  blog2,
  blog3,
  partner,
  team5,
  team6,
} from "../../assets/images";
import { FaPlay } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <section className="font-roboto text-[48px] font-extrabold min-h-screen bg-gradient-to-r from-[#1C2D2A] via-[#336F64] to-[#1C2D2A] ">
        <div className="flex justify-between items-center">
          <div className="max-md:hidden max-w-[540px]">
            <img src={home1} alt="home1" className="rounded-3xl" />
          </div>
          <div className="mt-[128px] w-full">
            <div className="flex justify-center items-center">
              <button className="border-2 border-white px-[24px] text-[20px] py-[8px] rounded-full font-medium text-white">
                Cyber Security
              </button>
            </div>
            <h2 className="text-white font-roboto font-extrabold text-[76px] text-center leading-[120%] my-[32px]">
              Securing Tomorrow's
              <br /> Connections Today
            </h2>
            <div className="flex justify-center items-center gap-[16px] ">
              <button className="text-white text-[20px] font-roboto rounded-3xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[16px]">
                Get Started
              </button>
              <div className="flex justify-center items-center rounded-full px-[24px] py-[24px] bg-black">
                <FaPlay color="white" className="w-[24px] h-[24px]" />
              </div>
            </div>
            <div className="mt-[64px] w-full flex justify-center items-center">
              <img
                src={home2}
                alt="home2"
                className="rounded-3xl max-w-[540px]"
              />
            </div>
          </div>

          {/* === THIRD IMAGES === */}
          <img src="" alt="" />
          <div className="max-w-[540px]">
            <img src={home3} alt="home3" className="rounded-3xl" />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-black_bg">
        <h4 className="pt-[128px] text-center text-[32px] font-roboto font-extrabold text-white leading-[120%px]">
          We Have Over <span className="text-icons_bg">230 Satisfied </span>And{" "}
          <br /> Happy Customers.
        </h4>
      </section>
    </>
  );
};

export default Home;
