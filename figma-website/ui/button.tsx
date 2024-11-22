import { cva } from 'class-variance-authority';

const baseClasses = "rounded-full font-medium uppercase";

const buttonClasses = cva(baseClasses, {
  variants: {
    variant: {
      primary: "bg-none text-black w-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 transition ease-in-out font-bold",
      secondary: "bg-none text-white w-full",
      danger: "bg-violet-500 text-white",
      text: "text-slate-700 uppercase underline hover:text-slate-600 hover:bg-slate-900/5",
    },
    size: {
      small: "px-5 py-1.5 text-sm",
      medium: "px-5 py-3",
      large: "px-8 py-4 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export function Button({ variant, size, className, ...rest }) {
  return (
    <button
      {...rest}
      className={buttonClasses({ variant, size, className })}
    />
  );
};
