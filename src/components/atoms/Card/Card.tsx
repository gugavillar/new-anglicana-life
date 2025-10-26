import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { cardClasses, cardContainerTextClasses } from './Card.utils'

type CardProps = ComponentProps<'div'> & {
	orientation?: 'vertical' | 'horizontal'
}

type CardImageContainer = ComponentProps<'div'>

export const CardImageContainer = ({ className, ...props }: CardImageContainer) => {
	return <div className={twMerge('relative', className)} {...props} />
}

export const CardContainerText = ({ className, orientation = 'vertical', ...props }: CardProps) => {
	return <div className={twMerge(cardContainerTextClasses[orientation], className)} {...props} />
}

export const Card = ({ className, orientation = 'vertical', ...props }: CardProps) => {
	return (
		<div
			className={twMerge(
				'border-[0.0313rem] border-card-border bg-card-background rounded-[1.25rem] transition-all ease-in duration-300 hover:border-card-border-hover hover:scale-95',
				cardClasses[orientation],
				className
			)}
			{...props}
		/>
	)
}
