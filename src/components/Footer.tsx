import { footerLinks } from "../contants";
import Button from "./Button";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1D5246]">
        <div className="flex justify-center items-center">
          <div className="flex justify-between w-[1440px] items-start gap-[32px] py-[64px]">
            <div className="w-1/2">
              <h2 className="font-roboto font-bold text-white text-[32px] max-w-[320px] leading-[110%] mb-[24px]">
                Prepare To Find Solutions To Your Issues.
              </h2>
              <div className="flex justify-start items-center gap-[16px]">
                <input
                  type="text"
                  placeholder="Your Email Here"
                  className="px-[32px] rounded-[30px] py-[16px]"
                />
                <Button />
              </div>
              <h4 className="font-roboto font-bold text-white text-[24px] leading-[120%] py-[24px]">
                Hello@Domainsite.com
              </h4>
              <h4 className="font-roboto font-normal text-white text-[20px] leading-[100%]">
                KLLG St, No.99, Thimphu City, 11001
              </h4>
            </div>
            <div className="flex justify-between items-start w-1/2">
              {footerLinks.map((footer) => (
                <div>
                  <h4 className="font-roboto font-bold text-white text-[24px] leading-normal mb-[16px] ">
                    {footer.title}
                  </h4>
                  <h4>
                    {footer.links.map((link) => (
                      <div>
                        <a
                          href={link.href}
                          className="font-roboto font-normal text-white text-[20px] leading-[150%]"
                        >
                          {link.lable}
                        </a>
                      </div>
                    ))}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
