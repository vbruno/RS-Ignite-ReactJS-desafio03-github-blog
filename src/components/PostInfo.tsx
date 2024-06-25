import Image from 'next/image'
import { Go } from './Go'
import Link from 'next/link'

export function PostInfo() {
  return (
    <div className="bg-base-profile rounded-xl p-8">
      <div className="flex justify-between">
        <Link href={'/'} className="flex textComponentLink gap-2 items-center">
          <Image
            src={'static/image/icons/chevron-left-solid.svg'}
            width={12}
            height={12}
            alt="Icon chevron left"
          />
          <span className="textComponentLink">VOLTAR</span>
        </Link>
        <Go href="/">ver no github</Go>
      </div>
      <h1 className="textTitleL mt-5 mb-2">
        JavaScript data types and data structures
      </h1>
      <div className="flex gap-6 mt-6">
        <div className="flex gap-2">
          <Image
            src={'/static/image/icons/github-brands.svg'}
            width={18}
            height={18}
            alt="icon github"
          />
          <p className="textTextM">cameronwll</p>
        </div>
        <div className="flex gap-2">
          <Image
            src={'/static/image/icons/calendar-day-solid.svg'}
            width={18}
            height={18}
            alt="icon github"
          />
          <p className="textTextM">Há 1 dia</p>
        </div>
        <div className="flex gap-2">
          <Image
            src={'/static/image/icons/comment-solid.svg'}
            width={18}
            height={18}
            alt="icon github"
          />
          <p className="textTextM">5 comentários</p>
        </div>
      </div>
    </div>
  )
}
