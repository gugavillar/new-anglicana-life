import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

import { activeClass, variantClass } from './Link.utils'

type LinkProps = NextLinkProps & {
	label: string
	className?: ClassNameValue
	variant?: 'primary' | 'button' | 'large'
	active?: boolean
}

export const Link = ({ href, label, className, active, variant = 'primary', ...props }: LinkProps) => {
	return (
		<NextLink
			className={twMerge('font-display text-white', variantClass[variant], active && activeClass[variant], className)}
			href={href}
			{...props}
		>
			{label}
		</NextLink>
	)
}
