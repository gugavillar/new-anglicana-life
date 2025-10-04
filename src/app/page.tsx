import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center size-full justify-center px-4">
      <div className="flex flex-col max-w-3xl items-center justify-center gap-2">
        <h1 className="text-3xl font-semibold">Estamos em manutenção</h1>
        <h2 className="text-xl text-center text-balance">
          Nosso site está passando por uma atualização para ficar ainda melhor. Enquanto isso,
          continue acompanhando tudo o que Deus tem feito em nossa igreja!
        </h2>
      </div>
      <Image src="/logo.svg" alt="Logo" width={200} height={200} />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg">Siga-nos nas redes sociais</h3>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/anglicana.vida/" target="_blank">
            <Image src="/instagram.svg" alt="Instagram" width={60} height={60} />
          </Link>
          <Link href="https://www.youtube.com/@AnglicanaVida" target="_blank">
            <Image src="/youtube.png" alt="Youtube" width={80} height={80} />
          </Link>
        </div>
      </div>
    </div>
  )
}
