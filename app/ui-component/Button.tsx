"use client";
interface ButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  className = "px-8 py-4 text-fontcolor rounded-md border-2 border-bordercolor my-8 hover:bg-lightcolor ",
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
