import Image from 'next/image'
import Link from 'next/link'

type LinkProps = {
  children: React.ReactNode
  href: string
  newTab?: boolean
}

export function Go(props: LinkProps) {
  return (
    <Link
      className="flex space-x-2 items-center textComponentLink"
      href={props.href ?? '#'}
      target={props.newTab ? '_blank' : '_self'}
    >
      <h1 className="uppercase">{props.children}</h1>
      <Image
        src={'/static/image/icons/arrow-up-right-from-square-solid.svg'}
        width={12}
        height={12}
        alt="icon link"
      />
    </Link>
  )
}
