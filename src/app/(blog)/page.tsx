import { Post } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { TextInput } from '@/components/TextInput'

export default function page() {
  return (
    <div className="-mt-20 max-w-[864px] flex flex-col justify-center items-center">
      <Profile />
      <div className="mt-16">
        <div className="flex items-center justify-between">
          <span className="textTitleS">Publicações</span>
          <span className="textTextS">6 publicações</span>
        </div>
        <TextInput placeholder="Buscar conteúdo..." />
        <div className="mt-12 flex flex-wrap gap-8">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}
