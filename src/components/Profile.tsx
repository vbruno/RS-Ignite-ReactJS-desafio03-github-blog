import Image from 'next/image'
import { Go } from './Go'

export function Profile() {
  return (
    <div className="w-[864px] h-52 bg-base-profile rounded-xl">
      <div className="flex justify-center px-9 py-8 space-x-8 ">
        <Image
          className="rounded-lg"
          src="https://www.github.com/vbruno.png"
          width={148}
          height={148}
          alt="image profile"
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <h1 className="textTitleL">Bruno S Velho</h1>
            <Go href="post">GITHUB</Go>
          </div>
          <p className="textTextM mt-2">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
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
                src={'/static/image/icons/building-solid.svg'}
                width={18}
                height={18}
                alt="icon github"
              />
              <p className="textTextM">Rocketseat</p>
            </div>
            <div className="flex gap-2">
              <Image
                src={'/static/image/icons/user-group-solid.svg'}
                width={18}
                height={18}
                alt="icon github"
              />
              <p className="textTextM">32 seguidores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
