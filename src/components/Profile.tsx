import Image from 'next/image'
import { Go } from './Go'
import { GitHubUserAPI } from '@/services/githubUserAPIService'

export async function Profile() {
  const user = await new GitHubUserAPI().getUser()

  // console.log(user)

  return (
    <div className="w-[864px] h-52 bg-base-profile rounded-xl">
      <div className="flex justify-center px-9 py-8 space-x-8 ">
        <Image
          className="rounded-lg size-36"
          src={user.avatar_url}
          width={148}
          height={148}
          alt="image profile"
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <h1 className="textTitleL">{user.name}</h1>
            <Go href={user.html_url ?? 'Bio Empty 😭'} newTab>
              GITHUB
            </Go>
          </div>
          <p className="textTextM mt-2">{user.bio}</p>
          <div className="flex gap-6 mt-6">
            <div className="flex gap-2">
              <Image
                className="size-5"
                src={'/static/image/icons/github-brands.svg'}
                width={18}
                height={18}
                alt="icon github"
              />
              <p className="textTextM">{user.login}</p>
            </div>
            <div className="flex gap-2">
              <Image
                className="size-5"
                src={'/static/image/icons/building-solid.svg'}
                width={18}
                height={18}
                alt="icon github"
              />
              <p className="textTextM">{user.company}</p>
            </div>
            <div className="flex gap-2">
              <Image
                className="size-5"
                src={'/static/image/icons/user-group-solid.svg'}
                width={18}
                height={18}
                alt="icon github"
              />
              <p className="textTextM">{user.followers} seguidores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
