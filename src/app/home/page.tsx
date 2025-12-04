import { Heading, Link } from '@/components/atoms'

export default function Home() {
	return (
		<div className="flex items-center justify-center size-full">
			<Heading as="h4">Teste</Heading>
			<Link href="/" label="Teste" variant="button" />
		</div>
	)
}
