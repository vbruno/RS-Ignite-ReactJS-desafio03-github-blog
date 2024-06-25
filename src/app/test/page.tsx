import { GitHubSearchApi } from '@/services/githubSearchAPIService'

export default async function Page() {
  new GitHubSearchApi().GetSearchIssues()

  return <div className="text-zinc-100">Pagina de Teste</div>
}
