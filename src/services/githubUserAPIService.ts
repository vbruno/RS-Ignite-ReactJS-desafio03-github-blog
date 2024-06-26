import { env } from '@/env'

export type GetUserProps = {
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
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: boolean
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export class GitHubUserAPI {
  private username = ''

  constructor() {
    this.username = env.github_user
  }

  async getUser() {
    const response = await fetch(
      `https://api.github.com/users/${this.username}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )

    const data: GetUserProps = await response.json()

    // console.log(data)

    return data
  }
}
