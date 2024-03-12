import { TButton } from "../types";

// const Button = ({ children }: Button) => {
//   // === we can customized the button from here, but we cannot do it from the home.tsx page we have ===
//   return <div className="">{children}</div>;
// };

// export default Button;

export default function NButton({ type, autoFocus }: TButton) {
  return (
    <a type={type} autoFocus={autoFocus}>
      click me
    </a>
  );
}
