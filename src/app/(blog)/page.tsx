import { Post } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { TextInput } from '@/components/TextInput'
import { GitHubSearchAPI } from '@/services/githubSearchAPIService'
import Link from 'next/link'

export default async function page() {
  const { items: posts } = await new GitHubSearchAPI().GetSearchIssues()

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
          {posts.map((post) => (
            <Link key={post.id} href={`/post/${post.number}`}>
              <Post
                title={post.title}
                content={post.body}
                date={post.created_at}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
