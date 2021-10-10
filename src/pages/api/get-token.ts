import type { NextApiRequest, NextApiResponse } from 'next'

import environment from 'lib/environment'

type Data = {
  authToken: string
}
type Error = {
  error: string
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Data | Error>,
): Promise<void> => {
  const config = getConfig(response)

  if (!config) {
    return
  }

  const { url, username, password } = config

  // fetch the access token from the backend
  const tokenResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  const data: Data = await tokenResponse.json()

  response.status(200).json(data)
}

/**
 *
 * Show a warning if the env variables are not specified
 */
function getConfig(response: NextApiResponse<Data | Error>): {
  readonly url: string
  readonly username: string
  readonly password: string
} | null {
  try {
    const {
      GRAPHQL_API_LOGIN_URL: url,
      GRAPHQL_API_USERNAME: username,
      GRAPHQL_API_PASSWORD: password,
    } = environment
    return { url, username, password } as const
  } catch (error) {
    if (typeof error === 'string') {
      response.status(500).json({ error })
    }
  }
  return null
}
