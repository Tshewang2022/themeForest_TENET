import { FaPlay, FaAngleDown } from "react-icons/fa6";
import { home1, home2, home3, home4, whyus } from "../../assets/images";
import Button from "../../components/Button";
import { partner } from "../../assets/images";
import { FAQs, blogs, cards, chooseus, ourclients } from "../../contants";
import { FaFolderOpen } from "react-icons/fa";
import { useRef } from "react";
// import { ScrollParallax } from "react-just-parallax";
// import { motion, useScroll } from "framer-motion";
const AboutUs = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });
  return (
    <section className="">
      {/* === hero sections === */}
      <div
        className="min-h-screen bg-gradient-to-r from-[#1C2D2A] via-[#347166] to-[#1C2D2A] "
        ref={ref}
      >
        <div className="flex items-center justify-between absolute bottom-0 w-full ">
          {/* <ScrollParallax> */}
          <div className="flex justify-center items-center ">
            <img
              src={home1}
              alt="home1"
              width={460}
              className="rounded-[30px]"
            />
          </div>
          {/* </ScrollParallax> */}
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
          {/* <ScrollParallax> */}
          <div className="flex justify-center items-center">
            <img
              src={home3}
              width={460}
              alt="home3"
              className="rounded-[30px]"
            />
          </div>
          {/* </ScrollParallax> */}
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
              <div className="max-w-[1440px]">
                <div className="flex flex-wrap justify-center gap-[32px] mb-10">
                  {cards.map((card) => (
                    <div className="bg-gray p-[64px] max-w-[456px] rounded-[30px]">
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
      <div className="bg-gray py-[120px]">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center w-[1440px]">
            <div>
              <h6 className="font-roboto font-normal text-[20px] text-[#5BC496]">
                Why Choose Us?
              </h6>
              <h2 className="font-roboto font-extrabold text-white text-[56px] max-w-[540px] leading-[100%] my-[16px]">
                Elevate Your Safety With Our Expertise
              </h2>
              <p className="font-roboto font-normal text-white text-[16px] leading-[140%] max-w-[540px] my-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate atque nihil illum recusandae! Natus sed quod ipsum
                Lorem ipsum, Dolorum,
              </p>
              <div>
                {chooseus.map((choose) => (
                  <div className="flex justify-start gap-[32px]">
                    <div className="my-[8px]">
                      <img
                        src={choose.iconsURL}
                        alt="icons"
                        className="w-[48px] h-[48px]"
                      />
                    </div>
                    <div className="my-[8px]">
                      <h2 className="font-roboto font-extrabold text-white text-[24px]">
                        {choose.title}
                      </h2>
                      <p className="font-roboto font-normal text-white text-[16px] leading-[140%] max-w-[540px]">
                        {choose.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center w-[640px] h-[600px]">
              <img
                src={whyus}
                alt="whyus"
                className="rounded-[30px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === trust in digital realm */}
      <div className="flex justify-center items-center bg-[#296C5E]">
        <div className="my-[16px] bg-[#1B3834] max-w-[540px] rounded-[30px]">
          <h2 className="text-center pt-[32px] font-roboto font-extrabold text-white text-[56px] leading-[110%]">
            Bridging <span>Trust</span> In
            <br /> The Digital Realm
          </h2>
          <p className="px-[36px] text-center py-[16px] text-white font-normal font-robot text-[16px]">
            Lorem ipsum dolor, sit amet consectetur Dignissimos, temporibus?
          </p>
          <div className="flex justify-center  pb-[40px]">
            <Button />
          </div>
        </div>
      </div>

      {/* === FAQs === */}
      <div className="min-h-screen bg-gray pt-[120px]">
        <div className="flex justify-center items-start gap-[16px]">
          <div>
            <h6 className="font-roboto font-normal text-[20px] text-[#5CD2B9]">
              Frequently Asked Questions
            </h6>
            <h2 className="font-roboto font-extrabold text-[56px] text-white leading-[110%]">
              Here's Our Common <br /> Question We Had So Far
            </h2>
            <p className="font-roboto font-normal text-white text-[16px] max-w-[678px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              magnam repellat voluptatibus at provident, ad animi, ipsum impedit
              suscipit rem iste aliquam necessitatibus. Natus, quae laudantium.
              Voluptatem totam, modi eaque assumenda iste nesciunt cum ut
              repudiandae quos vero animi voluptate?
            </p>
          </div>
          <div>
            {FAQs.map((faq) => (
              <div className=" max-w-[768px] mb-[16px]">
                <div className="flex justify-between items-center bg-[#353535] rounded-[20px] mb-[8px] py-[32px] px-[32px]">
                  <h6 className="font-roboto font-semibold text-white text-[20px] leading-[120%] ">
                    {faq.title}
                  </h6>
                  <FaAngleDown className="w-[32px] h-[32px]" color="white" />
                </div>
                <div className="mx-[64px]">
                  <p className="font-roboto font-normal text-white text-[16px] leading-[130%] hidden">
                    {faq.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-[64px]">
          <div className="flex justify-between items-center max-w-[1440px] bg-gradient-to-b from-[#2D745F] to-[#0B2921] rounded-[30px] p-[64px] gap-[32px]">
            <div className="max-w-[720px]">
              <h6 className="font-roboto font-normal text-white text-[20px] leading-normal ">
                Get Your Free Consultation Now!
              </h6>
              <h2 className="font-roboto font-extrabold text-white text-[56px] leading-[100%] ">
                Best
                <span className="text-[#5CD2B9]"> Solutions </span> For Your
                Security Problems Of Network
              </h2>
            </div>
            <div className="max-w-[720px]">
              <p className="font-roboto font-normal text-white text-[16px] leading-[130%] py-[16px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                neque molestias, consequuntur sapiente ratione iusto sit nobis
                quas quaerat quo recusandae mollitia ea porro dolorem totam
                aliquam. Est voluptatibus corrupti unde officiis soluta alias
                libero vel consectetur saepe, cupiditate delectus.
              </p>
              <div className="flex justify-start items-center gap-[32px]">
                <Button />
                <Button />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[128px]">
          <div className="max-w-[1440px]">
            <h6 className="font-roboto font-normal text-[20px] text-[#5CD2B9] text-center">
              Testimonial
            </h6>
            <h2 className="font-roboto font-extrabold text-white text-[56px] text-center leading-[100%]">
              Here's Our Happy <br /> Client Review
            </h2>
            <div className="flex justify-between items-center mt-[64px]">
              <div className="flex justify-center items-center gap-[16px]">
                {ourclients.map((client) => (
                  <div>
                    <h5 className="font-roboto font-normal text-white text-[24px] leading-[160%]">
                      {client.description}
                    </h5>
                    <div className="flex justify-start items-center gap-[16px]">
                      <img
                        src={client.imgURL}
                        alt="image"
                        className="w-[96px] h-[96px] rounded-full"
                      />
                      <div>
                        <h4 className="font-roboto text-[#5CD2B9] text-[20px] leading-normal ">
                          {client.name}
                        </h4>
                        <h5 className="font-roboto text-white text-[20px] leading-normal">
                          {client.designation}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === blog post === */}
        <div className="flex justify-center items-center py-[128px]">
          <div className="flex justify-center items-center max-w-[1440px]">
            <div>
              <div className="flex justify-between items-end gap-[32px] mb-[64px]">
                <div>
                  <h6 className="font-roboto font-normal text-[20px] text-[#5CD2B9]">
                    Blog Post
                  </h6>
                  <h2 className="font-roboto font-extrabold text-white text-[56px] leading-[120%] max-w-[768px]">
                    Read Our Latest Blog & News, Become Current
                  </h2>
                </div>
                <div>
                  <p className="font-roboto font-normal text-white text-[16px] leading-[150%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Qui perferendis laborum tempore voluptatum repellat
                    veritatis accusantium quasi sed alias in.
                  </p>
                </div>
              </div>
              <div className="flex gap-[32px] justify-center items-center">
                {blogs.map((blog) => (
                  <div className="bg-[#353535] rounded-[20px] mmax-w-[320px]">
                    <img
                      src={blog.imgURL}
                      alt="blogs"
                      className="rounded-t-[20px]"
                    />
                    <div className="px-[46px] pt-[32px] pb-[40px]">
                      <div className="flex justify-start items-center gap-[16px] mb-[32px]">
                        <FaFolderOpen
                          className="w-[24px] h-[24px]"
                          color="#717171"
                        />
                        <h6 className="font-roboto font-normal text-[16px] text-[#717171]">
                          {blog.icons_description}
                        </h6>
                      </div>
                      <h2 className="font-roboto font-extrabold text-white text-[24px] leading-[140%] pb-[16px]">
                        {blog.title}
                      </h2>
                      <p className="font-roboto font-normal text-[#717171] text-[16px] pb-[32px]">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
