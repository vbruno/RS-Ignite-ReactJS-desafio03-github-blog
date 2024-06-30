import { Post } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { SearchComponent } from '@/components/SearchComponent'
import { GitHubSearchAPI } from '@/services/githubSearchAPIService'
import Link from 'next/link'

type PostProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function page({ searchParams }: PostProps) {
  const { items: posts, total_count } =
    await new GitHubSearchAPI().GetSearchIssues(searchParams.q as string)

  return (
    <div className="-mt-20 max-w-[864px] flex flex-col justify-center items-center">
      <Profile />
      <div className="mt-16 w-full">
        <div className="flex items-center justify-between">
          <span className="textTitleS">Publicações</span>
          <span className="textTextS">{total_count} publicações</span>
        </div>
        <SearchComponent />
        <div className="mt-12 flex flex-wrap gap-8">
          {posts.length > 0 &&
            posts.map((post) => (
              <Link key={post.id} href={`/post/${post.number}`}>
                <Post
                  title={post.title}
                  content={post.body}
                  date={post.created_at}
                />
              </Link>
            ))}
          {posts.length === 0 && (
            <div className="textTextM">Nenhum resultado encontrado</div>
          )}
        </div>
      </div>
    </div>
  )
}
