// import {
//   home1,
//   home2,
//   home3,
//   home4,
//   blog1,
//   blog2,
//   blog3,
//   partner,
//   team5,
//   team6,
// } from "../../assets/images";
const Home = () => {
  return (
    <section className="font-roboto text-[48px] font-extrabold min-h-screen bg-gradient-to-r from-[#1C2D2A] via-[#336F64] to-[#1C2D2A] brightness-50">
      <div className="flex justify-between items-center ">
        <div className="max-md:hidden">first image</div>
        <div>
          <button>Cyber Security</button>
          <p>Securing Tomorrow's Connections Today</p>
          <div className="flex justify-center items-center gap-[16px]">
            <button>Get Started</button>
            <div>play button</div>
          </div>
        </div>
        <img src="" alt="" />
        <div>third image</div>
      </div>
    </section>
  );
};

export default Home;
