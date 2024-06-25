import { GitHubUsersApi } from '@/services/githubService'

export default async function Page() {
  const apiGithub = new GitHubUsersApi('vbruno')

  const user = await apiGithub.getUser()

  return <div className="text-zinc-100">{user.name}</div>
}
