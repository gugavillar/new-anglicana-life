import { render } from '@testing-library/react'

import { Heading } from './Heading'
import { classElement } from './Heading.utils'

const variants = ['h1', 'h2', 'h3', 'h4'] as const
const levels = [1, 2, 3, 4]

describe('Heading', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<Heading>Teste</Heading>)

		expect(getByRole('heading', { name: 'Teste' })).toBeInTheDocument()
	})

	it('should accept custom class name', () => {
		const { getByRole } = render(<Heading className="custom-class">Teste</Heading>)

		expect(getByRole('heading', { name: 'Teste' })).toHaveClass('custom-class')
	})

	it.each(variants)('renders correctly with variant %s', (variant) => {
		const { getByRole } = render(<Heading as={variant}>Teste</Heading>)
		const element = getByRole('heading', { name: 'Teste' })

		expect(element).toHaveClass(classElement[variant])
		expect(element.tagName.toLowerCase()).toBe(variant)
	})
})
