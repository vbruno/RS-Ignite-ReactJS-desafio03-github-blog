export interface User {
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

export interface Label {
  id: number
  node_id: string
  url: string
  name: string
  description: string
  color: string
  default: boolean
}

export interface Assignee {
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

export interface Assignee2 {
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

export interface Creator {
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

export interface Milestone {
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

export interface PullRequest {
  url: string
  html_url: string
  diff_url: string
  patch_url: string
}

export interface ClosedBy {
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

export interface GetIssuesProps {
  id: number
  node_id: string
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  number: number
  state: string
  title: string
  body: string
  user: User
  labels: Label[]
  assignee: Assignee
  assignees: Assignee2[]
  milestone: Milestone
  locked: boolean
  active_lock_reason: string
  comments: number
  pull_request: PullRequest
  closed_at: string
  created_at: string
  updated_at: string
  closed_by: ClosedBy
  author_association: string
  state_reason: string
}

export class GitHubIssuesAPI {
  private urlBase = 'https://api.github.com/'
  private username = 'vbruno'
  private repository = 'RS-Ignite-ReactJS-desafio03-github-blog'

  async GetIssues(number: number) {
    const url = new URL(
      `/repos/${this.username}/${this.repository}/issues/${number}`,
      this.urlBase,
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

    const data: GetIssuesProps = await response.json()

    // console.log(data)

    return data
  }
}
