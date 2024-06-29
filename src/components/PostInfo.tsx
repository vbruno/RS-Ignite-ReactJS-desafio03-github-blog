import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import Image from 'next/image'
import { Go } from './Go'
import Link from 'next/link'
import { GitHubIssuesAPI } from '@/services/githubIssuesAPIService'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

type PostInfoProps = {
  numberPost: number
}

export async function PostInfo({ numberPost }: PostInfoProps) {
  const post = await new GitHubIssuesAPI().GetIssues(numberPost)

  return (
    <div>
      <div className="bg-base-profile rounded-xl p-8">
        <div className="flex justify-between">
          <Link
            href={'/'}
            className="flex textComponentLink gap-2 items-center hover:underline"
          >
            <Image
              src={'static/image/icons/chevron-left-solid.svg'}
              width={12}
              height={12}
              alt="Icon chevron left"
              className="size-3"
            />
            <span className="textComponentLink">VOLTAR</span>
          </Link>
          <Go href={post.html_url} newTab>
            ver no github
          </Go>
        </div>
        <h1 className="textTitleL mt-5 mb-2">{post.title}</h1>
        <div className="flex gap-6 mt-6">
          <div className="flex gap-2">
            <Image
              src={'/static/image/icons/github-brands.svg'}
              width={18}
              height={18}
              alt="icon github"
              className="size-5"
            />
            <p className="textTextM">{post.user.login}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={'/static/image/icons/calendar-day-solid.svg'}
              width={18}
              height={18}
              alt="icon github"
              className="size-5"
            />
            <p className="textTextM">{dayjs(post.created_at).fromNow()}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={'/static/image/icons/comment-solid.svg'}
              width={18}
              height={18}
              alt="icon github"
              className="size-5"
            />
            <p className="textTextM">
              {post.comments >= 1
                ? `${post.comments} comentários`
                : `Sem Comentário`}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-8" title="content">
        <div className="prose prose-h2:text-base-title prose-h3:text-base-subtitle prose-p:text-base-text prose-strong:text-base-text prose-a:text-blue prose-li:text-base-span">
          <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
        </div>
      </div>
    </div>
  )
}
