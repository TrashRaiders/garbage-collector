// copy of https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server-and-client-auth/lib/auth-cookies.js

import { IncomingMessage } from 'http'

import { parse, serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

const TOKEN_NAME = 'token'

export const MAX_AGE = 60 * 29 // 29 minutes

export function setTokenCookie(res: NextApiResponse, token: string): void {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  res.setHeader('Set-Cookie', cookie)
}

export function removeTokenCookie(res: NextApiResponse): void {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  })

  res.setHeader('Set-Cookie', cookie)
}

type Request =
  | NextApiRequest
  | (IncomingMessage & {
      cookies?: {
        [key: string]: string
      }
    })
  | undefined

export function parseCookies(req: Request): { [key: string]: string } {
  // For API Routes we don't need to parse the cookies.
  if (req?.cookies) return req.cookies

  // For pages we do need to parse the cookies.
  const cookie = req?.headers?.cookie
  return parse(cookie || '')
}

export function getTokenCookie(req: Request): string | undefined {
  const cookies = parseCookies(req)
  return cookies[TOKEN_NAME]
}

export async function getToken(req: Request): Promise<string> {
  const tokenFromCookie = getTokenCookie(req)

  if (tokenFromCookie) {
    // early return... no need to fetch a new token
    return tokenFromCookie
  }

  const response = await fetch('/api/get-token')
  const { authToken: newToken } = await response.json()

  return newToken
}
