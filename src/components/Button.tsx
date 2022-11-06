import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-purple-500 font-semibold text-white hover:text-black hover:bg-yellow-500 active:bg-purple-500',
  secondary:
    'bg-purple-500 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

// @ts-ignore
export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center rounded-xl py-2 px-3 text-lg outline-offset-2 transition active:transition-none',
    // @ts-ignore
    variantStyles[variant],
    className
  )

  return (
    <button className={className} {...props} />
  )
}
