import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import Markdown from 'react-markdown'

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

type PostProps = {
  title: string
  date: string
  content: string
}

export function Post({ title, content, date }: PostProps) {
  return (
    <div className="w-[416px] h-[260px] p-8 bg-base-post rounded-xl">
      <div className="flex justify-between mb-5 gap-5">
        <h1 className="textTitleM max-w-72">{title}</h1>
        <h2 className="textTextS w-24 text-end">{dayjs(date).fromNow()}</h2>
      </div>
      <Markdown
        className="textTextM line-clamp-4"
        disallowedElements={['a']}
        unwrapDisallowed
      >
        {content}
      </Markdown>
    </div>
  )
}
