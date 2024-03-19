const Pages = () => {
  return <div>Pages</div>;
};

export default Pages;

// import "./style.css";
// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";

// function Item() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   return (
//     <section>
//       <div ref={ref}>
//         <figure className="progress">
//           <svg id="progress" width="" height="" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="30"
//               pathLength="1"
//               className="indicator"
//               style={{ pathLength: scrollYProgress }}
//             />
//           </svg>
//         </figure>
//       </div>
//     </section>
//   );
// }

// export default function Pages() {
//   return (
//     <>
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//     </>
//   );
// }
