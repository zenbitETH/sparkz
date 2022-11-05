import { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode;
}
export type Ref = HTMLButtonElement;

const OuterContainer = forwardRef<Ref, Props>(function OuterContainer(
  props
) {
  return (
    <div className={clsx('sm:px-8')} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{props.children}</div>
    </div>
  )
})

const InnerContainer = forwardRef<Ref, Props>(function InnerContainer(
  props
) {
  return (
    <div
      className={clsx('relative px-4 sm:px-8 lg:px-12')}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{props.children}</div>
    </div>
  )
})

export const Container = forwardRef<Ref, Props>(function Container(
  props : any | undefined
) {
  return (
    <OuterContainer {...props}>
      {/* @ts-ignore */}
      <InnerContainer>{props.children}</InnerContainer>
    </OuterContainer>
  )
})
{/* @ts-ignore */}
Container.Outer = OuterContainer
{/* @ts-ignore */}
Container.Inner = InnerContainer
