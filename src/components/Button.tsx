import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-cals-500 font-semibold text-ugas-800 hover:bg-reward-500 hover:bg-cals-500 hover:text-white',  
}

// @ts-ignore
export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-lg outline-offset-2 transition active:transition-none',
    // @ts-ignore
    variantStyles[variant],
    className
  )

  return (
    <button className={className} {...props} />
  )
}
