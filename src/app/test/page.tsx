import { GitHubIssuesAPI } from '@/services/githubIssuesAPIService'

export default async function Page() {
  new GitHubIssuesAPI().GetIssues(1)

  return <div className="text-zinc-100">Pagina de Teste</div>
}
