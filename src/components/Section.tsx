import React, { HTMLAttributes, ReactNode } from 'react'

type SectionProps = {
    children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default function Section(props:SectionProps) {
  return (
    <section {...props}>{props.children}</section>
  )
}
