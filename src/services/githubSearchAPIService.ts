interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

interface Label {
  id: number
  node_id: string
  url: string
  name: string
  color: string
}

interface Creator {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

interface PullRequest {
  url: string
  html_url: string
  diff_url: string
  patch_url: string
}

interface Milestone {
  url: string
  html_url: string
  labels_url: string
  id: number
  node_id: string
  number: number
  state: string
  title: string
  description: string
  creator: Creator
  open_issues: number
  closed_issues: number
  created_at: string
  updated_at: string
  closed_at: string
  due_on: string
}

interface Item {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: Label[]
  state: string
  assignee: string
  milestone: Milestone
  comments: number
  created_at: string
  updated_at: string
  closed_at: string
  pull_request: PullRequest
  body: string
  score: number
  locked: boolean
  author_association: string
  state_reason: string
}

interface GetSearchIssuesProps {
  total_count: number
  incomplete_results: boolean
  items: Item[]
}

export class GitHubSearchAPI {
  private urlBase = 'https://api.github.com/'
  private username = 'vbruno'
  private repository = 'RS-Ignite-ReactJS-desafio03-github-blog'

  async GetSearchIssues(search: string = '') {
    const url = new URL('/search/issues', this.urlBase)
    url.searchParams.append(
      'q',
      `${search} repo:${this.username}/${this.repository}`,
    )

    // console.log(url.href)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    const data: GetSearchIssuesProps = await response.json()

    // console.log(data)

    return data
  }
}
