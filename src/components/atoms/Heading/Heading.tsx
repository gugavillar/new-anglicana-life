import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { classElement } from './Heading.utils'

type Variant = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps<T extends Variant> = {
	as?: T
	children: ReactNode
	className?: string
} & ComponentPropsWithoutRef<T>

export function Heading<T extends Variant = 'h1'>({ as, children, className, ...props }: HeadingProps<T>) {
	const Component = as || 'h1'
	return (
		<Component className={twMerge('text-white font-bold font-display', classElement[Component], className)} {...props}>
			{children}
		</Component>
	)
}
