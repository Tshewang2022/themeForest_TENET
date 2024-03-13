import {
  home1,
  home2,
  home3,
  home4,
  whyus,
  // blog1,
  // blog2,
  // blog3,
  partner,
  // team5,
  // team6,
} from "../../assets/images";
import { Icon1, icon2, icon3, icon4, icon5, icon6 } from "../../assets/icons";
import { FaPlay } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { BsFillBugFill } from "react-icons/bs";
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

      {/* === our customers === */}
      <section className="min-h-screen bg-black_bg">
        <h4 className="pt-[128px] text-center text-[32px] font-roboto font-extrabold text-white leading-[120%px]">
          We Have Over <span className="text-icons_bg">230 Satisfied </span>And{" "}
          <br /> Happy Customers.
        </h4>
        <div className="flex justify-center items-center mt-[32px]">
          <div className="w-[1440px] bg-green-400 h-[40px]">this</div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[640px]">
            <img src={home4} alt="our-experience" className="rounded-3xl" />
          </div>
          <div>
            <h5 className="text-white text-[20px] text-center font-roboto font-semibold">
              10 Years Of Experience
            </h5>
            <h3 className="text-center font-roboto font-extrabold text-[32px] text-white leading-[120%]">
              Innovation Trust, Our Journey In Securing <br /> Your Tomorrow.
            </h3>
            <p className="text-[16px] font-sans text-white leading-[150%] text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
              porro omnis nesciunt assumenda quod et blanditiis minima velit
              sapiente modi, commodi neque. Minima iure fuga repellat incidunt
              nihil tenetur dolores.
            </p>
            <div className="flex justify-center items-center">
              <button className="text-white text-[20px] font-roboto rounded-3xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[16px]">
                Get Started
              </button>
              <div className="flex justify-center items-center">
                <img src={partner} alt="partners" className="h-[56px]" />
                <h6 className="text-white font-bold text-[24px]">
                  20+ Trusted Partner
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green_bg min-h-screen py-[128px]">
        <h6 className="text-[20px] font-roboto font-semibold text-white mb-[32px] text-center">
          Our Services
        </h6>
        <h2 className="text-[46px] font-roboto text-white leading-[120%] text-center font-extrabold">
          CyberArmor Suite, Fortifying Your <br /> Digital Defenses.
        </h2>
        <div className=" flex flex-wrap justify-center items-center mt-[32px] mx-[32px] gap-[32px]">
          <div className="flex justify-center items-center max-w-[1440px] gap-[32px]">
            <div className="bg-[#181818] rounded-2xl p-[32px] flex flex-col">
              <img src={Icon1} alt="icons" className="w-[56px] h-[56px]" />
              <h4 className="text-[24px] font-semibold leading-[150%] py-[12px] text-white">
                Network Protection
              </h4>
              <p className="max-w-[440px] text-white font-[20px] leading-[130%] text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                quam neque voluptatem nulla? Aliquam, ipsam quaerat? Quibusdam
                reiciendis veritatis modi!
              </p>
              <div className="flex justify-start items-center mt-[32px]">
                <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-[32px]">
              <img src={icon2} alt="icons2" className="w-[56px] h-[56px]" />
              <h4 className="text-[24px] font-semibold max-sm:text-center leading-[150%] py-[12px] text-white">
                Network Protection
              </h4>
              <p className="max-sm:text-center  max-w-[440px] text-white font-[20px] leading-[130%] text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                quam neque voluptatem nulla? Aliquam, ipsam quaerat? Quibusdam
                reiciendis veritatis modi!
              </p>
              <div className="flex justify-start max-sm:justify-center items-center mt-[32px]">
                <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-[32px]">
              <img src={icon3} alt="icons3" className="w-[56px] h-[56px]" />
              <h4 className="text-[24px] font-semibold max-sm:text-center leading-[150%] py-[12px] text-white">
                Network Protection
              </h4>
              <p className="max-sm:text-center max-w-[440px] text-white font-[20px] leading-[130%] text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                quam neque voluptatem nulla? Aliquam, ipsam quaerat? Quibusdam
                reiciendis veritatis modi!
              </p>
              <div className="flex max-sm:justify-center items-center mt-[32px]">
                <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center max-w-[1440px] gap-[32px]">
            <div className="bg-[#181818] rounded-2xl p-[32px] flex flex-col">
              <img src={icon4} alt="icon1" className="w-[56px] h-[56px]" />
              <h4 className="text-[24px] font-semibold max-sm:text-center leading-[150%] py-[12px] text-white">
                Network Protection
              </h4>
              <p className="max-sm:text-center max-w-[440px] text-white font-[20px] leading-[130%] text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                quam neque voluptatem nulla? Aliquam, ipsam quaerat? Quibusdam
                reiciendis veritatis modi!
              </p>
              <div className="flex max-sm:justify-center items-center mt-[32px]">
                <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-[32px]">
              <img src={icon5} alt="icon5" className="w-[56px] h-[56px]" />
              <h4 className="text-[24px] font-semibold max-sm:text-center leading-[150%] py-[12px] text-white">
                Network Protection
              </h4>
              <p className="max-sm:text-center max-w-[440px] text-white font-[20px] leading-[130%] text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                quam neque voluptatem nulla? Aliquam, ipsam quaerat? Quibusdam
                reiciendis veritatis modi!
              </p>
              <div className="flex max-sm:justify-center items-center mt-[32px]">
                <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-[32px]">
              <img src={icon6} alt="icon6" className="w-[56px] h-[56px]" />
              <h4 className="text-[24px] font-semibold max-sm:text-center leading-[150%] py-[12px] text-white">
                Network Protection
              </h4>
              <p className="max-sm:text-center max-w-[440px] text-white font-[20px] leading-[130%] text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                quam neque voluptatem nulla? Aliquam, ipsam quaerat? Quibusdam
                reiciendis veritatis modi!
              </p>
              <div className="flex max-sm:justify-center items-center mt-[32px]">
                <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[990px] bg-gray flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center ">
          <div className="max-w-[1440px] flex justify-center items-center">
            <div className="gap-[32px]">
              <h5 className="text-white font-roboto font-normal text-[20px] leading-normal py-[8px]">
                Why choose us?
              </h5>
              <h2 className="text-white font-roboto font-extrabold text-[46px] leading-[120%] py-[8px]">
                Elevate Your Safety With Our <br /> Experties
              </h2>
              <p className="py-[8px] text-white font-roboto leading-[130%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda non necessitatibus blanditiis animi aperiam quibusdam
                iusto quod nemo autem.
              </p>
              <div className="flex justify-start my-[16px]">
                <IoShieldCheckmarkOutline
                  className="w-[56px] h-[48px]"
                  color="#5CD2B9"
                />
                <div className="px-[16px]">
                  <h4 className="font-roboto text-[24px] text-white font-bold">
                    Privacy Protection
                  </h4>
                  <p className="text-white leading-[120%] font-roboto text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum reprehenderit autem quod nobis corporis praesentium
                    accusamus
                  </p>
                </div>
              </div>
              <hr className="w-full h-[2px] bg-[#f5f5f5] my-[16px]" />
              <div className="flex justify-start my-[16px]">
                <GrSecure className="w-[48px] h-[48px]" color="#5CD2B9" />
                <div className="px-[16px]">
                  <h4 className="font-roboto text-[24px] text-white font-bold">
                    Privacy Protection
                  </h4>
                  <p className="text-white leading-[120%] font-roboto text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum reprehenderit autem quod nobis corporis praesentium
                    accusamus
                  </p>
                </div>
              </div>
              <hr className="w-full h-[2px] bg-[#f5f5f5] my-[16px]" />
              <div className="flex justify-start my-[16px]">
                <BsFillBugFill className="w-[48px] h-[48px]" color="#5CD2B9" />
                <div className="px-[16px]">
                  <h4 className="font-roboto text-[24px] text-white font-bold">
                    Privacy Protection
                  </h4>
                  <p className="text-white leading-[120%] font-roboto text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum reprehenderit autem quod nobis corporis praesentium
                    accusamus
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full items-center mt-[64px]">
              <div className="w-[640px] h-[640px]">
                <img src={whyus} alt="whyus" className="rounded-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === trust section === */}
      <section className="bg-[#286A62] min-h-[450px] flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="min-w-[640px] rounded-[30px] bg-[#1A3734] px-[32px] py-[64px]">
            <h2 className="text-white text-[48px] leading-[120%] text-center font-bold py-[16px]">
              Bridging <span>Trust</span> In
              <br /> The Digital Realm
            </h2>
            <p className="text-center font-roboto font-normal text-white text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              suscipit?
            </p>
            <div className="flex justify-center items-center pt-[32px]">
              <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray py-[120px] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[1440px]">
          <div>
            <h6 className="text-white">Frquently Asked Questions</h6>
            <h2 className="text-white">
              Here's Our Common Question We Had So Far
            </h2>
          </div>
          <div className="px-[32px]">
            <div className="flex justify-between items-center px-[32px]">
              <h6 className="text-white">
                What is The Significance Of Cybersercurity In Today's Digital
                Landscape?
              </h6>
              icons, arrow right
            </div>
            <p className=" text-white text-[16px] leading-[120%] font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              porro sunt modi corrupti dolor voluptatem doloribus vitae tenetur
              ut. Impedit animi autem illo tenetur laboriosam et ex distinctio
              esse voluptas?
            </p>
            <p>
              How Can I Assess The Cybersecurity Risks For My Business Or
              Personal Network?
            </p>
            <p>What Measures Can I Take To Enhance My Online Privacy?</p>
            <p>
              Hoe Can I Educate My Employees Or Family Members About
              Cybersecurity Best Practices ?
            </p>
            <p>
              What Should I Do if I Suspect A Security Breach Or Cyberattact?
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-b from-[#2D735F] to-[#0B2922] py-[32px] w-[1440px] rounded-[30px]">
            <div className="flex justify-center items-center gap-[32px] p-[64px]">
              <div>
                <h6 className="text-white text-[16px] font-roboto font-normal leading-normal">
                  Get Your Free Consultation Now!
                </h6>
                <h2 className="text-[48px] text-white font-roboto font-extrabold leading-[120%] max-w-[650px]">
                  Best <span>Solutions</span> For Your Security Problems Of
                  Network
                </h2>
              </div>

              <div className="flex justify-center items-center">
                <div>
                  <p className="text-white text-[16px] leading-[150%] max-w-[640px] ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corporis temporibus maiores eveniet cupiditate recusandae
                    adipisci ab magni vitae ut vero. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Expedita perspiciatis ad nisi
                    assumenda at eius reiciendis hic illo necessitatibus a!
                  </p>
                  <div className="flex justify-start items-center gap-[16px] mt-[40px]">
                    <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                      Get Started
                    </button>
                    <button className="text-white text-[20px] font-roboto rounded-xl bg-gradient-to-b from-[#55C6AE] to-[#33816C]  px-[24px] py-[12px]">
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="font-roboto font-normal text-white text-[16px] leading-[120%] text-center">
            Testimonial
          </h6>
          <h4 className="font-roboto font-extrabold text-[48px] text-white leading-[120%] text-center">
            Here's Our Happy
            <br /> Client Review
          </h4>
        </div>
      </section>
    </>
  );
};

export default Home;
