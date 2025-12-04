import { render } from '@testing-library/react'

import { Link } from './Link'
import { activeClass, variantClass } from './Link.utils'

const variants = ['primary', 'button', 'large'] as const

describe('Link', () => {
	it('should render correctly', () => {
		const { getByText, getByRole } = render(<Link href="/" label="Test" />)

		expect(getByRole('link')).toBeInTheDocument()
	})

	it('should accept custom class name', () => {
		const { getByRole } = render(<Link className="custom-class" href="/" label="Test" />)

		expect(getByRole('link')).toHaveClass('custom-class')
	})

	it.each(variants)('renders correctly with variant %s', (variant) => {
		const { getByRole } = render(<Link href="/" label="Test" variant={variant} />)
		const element = getByRole('link')

		expect(element).toHaveClass(variantClass[variant])
	})

	it.each(variants)('renders correctly with variant %s and active', (variant) => {
		const { getByRole } = render(<Link active href="/" label="Test" variant={variant} />)
		const element = getByRole('link')

		expect(element).toHaveClass(activeClass[variant])
	})
})
