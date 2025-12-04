import { render } from '@testing-library/react'

import { Card, CardContainerText, CardImageContainer } from './Card'
import { cardClasses, cardContainerTextClasses } from './Card.utils'

const orientation = ['vertical', 'horizontal'] as const

describe('Card', () => {
	it('should render card correctly', () => {
		const { getByText } = render(<Card>Test</Card>)
		expect(getByText('Test')).toBeInTheDocument()
	})

	it('should render card text container correctly', () => {
		const { getByText } = render(<CardContainerText>Test</CardContainerText>)
		expect(getByText('Test')).toBeInTheDocument()
	})

	it('should render card image container correctly', () => {
		const { getByText } = render(<CardImageContainer>Test</CardImageContainer>)
		expect(getByText('Test')).toBeInTheDocument()
	})

	it('should card accept custom class', () => {
		const { getByText } = render(<Card className="custom-class">Test</Card>)
		expect(getByText('Test')).toHaveClass('custom-class')
	})

	it('should card text container accept custom class', () => {
		const { getByText } = render(<CardContainerText className="custom-class">Test</CardContainerText>)
		expect(getByText('Test')).toHaveClass('custom-class')
	})

	it('should card image container accept custom class', () => {
		const { getByText } = render(<CardImageContainer className="custom-class">Test</CardImageContainer>)
		expect(getByText('Test')).toHaveClass('custom-class')
	})

	it.each(orientation)('should card render correctly with orientation %s', (orientation) => {
		const { getByText } = render(<Card orientation={orientation}>Test</Card>)
		expect(getByText('Test')).toHaveClass(cardClasses[orientation])
	})

	it.each(orientation)('should card text container render correctly with orientation %s', (orientation) => {
		const { getByText } = render(<CardContainerText orientation={orientation}>Test</CardContainerText>)
		expect(getByText('Test')).toHaveClass(cardContainerTextClasses[orientation])
	})
})
