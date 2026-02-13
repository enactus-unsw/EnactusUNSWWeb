import { ComponentProps, forwardRef } from 'react';

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<'button'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className="w-full flex-none rounded-xl border border-transparent bg-blue-600 px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
