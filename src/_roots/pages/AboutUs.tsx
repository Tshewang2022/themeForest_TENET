import { FaPlay } from "react-icons/fa6";
import { home1, home2, home3, home4 } from "../../assets/images";
import Button from "../../components/Button";
import { partner } from "../../assets/images";
import { cards } from "../../contants";
const AboutUs = () => {
  return (
    <section className="">
      {/* === hero sections === */}
      <div className="min-h-screen bg-gradient-to-r from-[#1C2D2A] via-[#347166] to-[#1C2D2A]">
        <div className="flex  items-center justify-between absolute bottom-0 w-full ">
          <div className="flex justify-center items-center ">
            <img
              src={home1}
              alt="home1"
              width={460}
              className="rounded-[30px]"
            />
          </div>
          <div>
            <div className="flex justify-center items-center mb-[32px]">
              <button className="font-roboto font-medium text-[20px] text-white border-2 border-white rounded-[30px] px-[24px] py-[12px]">
                Cyber Security
              </button>
            </div>
            <h1 className="font-roboto font-extrabold text-white text-[86px] text-center leading-[120%]">
              Securing Tomorrow's, <br /> Connections Today
            </h1>
            <div className="flex justify-center items-center gap-[32px] mt-[32px]">
              <Button />
              <button className="flex justify-center items-center rounded-full p-[16px] bg-black">
                <FaPlay color="white" className="w-[24px] h-[24px]" />
              </button>
            </div>
            <div className="flex justify-center mt-[120px]">
              <img
                src={home2}
                width={560}
                alt="home2"
                className="rounded-[30px] object-bottom"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={home3}
              width={460}
              alt="home3"
              className="rounded-[30px]"
            />
          </div>
        </div>
      </div>

      {/* === our experience === */}
      <div className=" min-h-[1200px] bg-gray relative">
        <div className="flex justify-center">
          <div className="w-full max-w-[1250px] pt-[120px]">
            <h4 className="font-roboto font-bold text-white text-[32px] leading-[120%] text-center">
              We Have Over{" "}
              <span className="text-[#5BC496]"> 230 Satisfied</span> And Happy
              <br />
              Customers
            </h4>
            <div className="w-full min-h-[96px] text-white bg-green-500 mb-[120px] mt-[32px]">
              this is the slider
            </div>
            <div className="flex justify-between items-center gap-[32px]">
              <div className="flex justify-center items-center">
                <img
                  src={home4}
                  alt="home4"
                  className="rounded-[30px] max-w-[560px] h-[460px]"
                />
              </div>

              <div>
                <h6 className="font-roboto font-medium text-[24px] text-[#5BC496] mb-[32px]">
                  10 Years Of Experience
                </h6>
                <h2 className="font-roboto font-extrabold text-white text-[56px] md:max-w-[640px] leading-[110%]">
                  Innovating Trust, Our Jounrney In Securing Your Tomorrow.
                </h2>
                <p className="font-roboto font-normal text-white text-[14px] leading-[130% md:max-w-[590px] md:py-[32px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus ad pariatur iusto incidunt, minima, qui accusamus et
                  mollitia autem quaerat dolorem. Delectus voluptatem dolor eius
                  quas error consectetur voluptatibus consequuntur?
                </p>
                <div className="flex justify-start items-center gap-[32px] ">
                  <Button />
                  <div className="flex justify-center items-center gap-[16px]">
                    <img src={partner} alt="partner" className="max-h-[56px]" />
                    <h6 className="font-roboto font-extrabold text-white text-[24px] ">
                      20+ Trusted Partner
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#317D69] to-[#59CDB4] px-[64px] pt-[64px] pb-[32px] absolute bottom-[-100px] left-[25%] rounded-[30px]">
              <div className=" flex justify-center items-center gap-[32px]">
                <div className="relative w-[390px]">
                  <div className="absolute left-0 bottom-[-80px] bg-[#5CD2B9] px-[32px] pt-[32px] rounded-t-[20px] ">
                    <h4 className="font-roboto font-bold text-[32px] leading-[100%]">
                      We Have Done
                      <br /> The Impossible
                    </h4>
                    <p className="font-roboto font-normal text-[16px] leading-[120%] pt-[32px] pb-[64px]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor temporibus quas suscipit vitae laborum odio ducimus,
                    </p>
                  </div>
                </div>
                <div className="">
                  <h1 className="font-roboto font-extrabold text-white text-[76px] text-center leading-[100%]">
                    3.5k
                  </h1>
                  <p className="font-roboto font-normal text-white text-[20px] text-center">
                    Projects Done
                  </p>
                </div>
                <div className="">
                  <h1 className="font-roboto font-extrabold text-white text-[76px] text-center leading-[100%]">
                    1.5k
                  </h1>
                  <p className="font-roboto font-normal text-white text-[20px] text-center">
                    Happy Clients
                  </p>
                </div>
                <div className="">
                  <h1 className="font-roboto font-extrabold text-white text-[76px] text-center leading-[100%]">
                    50%
                  </h1>
                  <p className="font-roboto font-normal text-white text-[20px] text-center">
                    Growth over year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === our services === */}
      <div className="min-h-screen bg-green_bg py-[64px]">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center mt-[120px]">
            <div>
              <h6 className="font-roboto font-normal text-[#5CD2B9] text-[20px] text-center leading-normal mb-[32px]">
                Our Services
              </h6>
              <h2 className="font-roboto font-extrabold text-white text-extrabold text-[46px] leading-[100%] text-center mb-[64px]">
                CyberArmor Suite, Fortifying Your <br /> Digital Defenses.
              </h2>
              <div className="max-w-[1536px]">
                <div className="flex flex-wrap justify-center gap-[16px] mb-10">
                  {cards.map((card) => (
                    <div className="bg-gray p-[64px] max-w-[440px] rounded-[30px]">
                      <div className="flex items-center justify-start mb-[16px]">
                        <img
                          src={card.imgURL}
                          alt="icons"
                          className="w-[78px] h-[78px]"
                        />
                      </div>
                      <h4 className="font-roboto font-bold text-[26px] text-white text-start my-[16px]">
                        {card.title}
                      </h4>
                      <p className="font-roboto font-normal text-white text-[16px] leading-[130%] mb-[32px]">
                        {card.description}
                      </p>
                      <Button />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Why chooseus === */}
      <div className="min-h-[820px] bg-gray">Why choose us</div>

      {/* === FAQs === */}
      <div className="min-h-screen bg-gray">FAQs</div>

      {/* === Blog post === */}
      <div>Blog post</div>
    </section>
  );
};

export default AboutUs;
