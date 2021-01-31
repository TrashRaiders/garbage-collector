import { IncomingMessage } from 'http'

import cookie from 'cookie'

export function parseCookies(
  req: IncomingMessage & {
    cookies?:
      | {
          [key: string]: string
        }
      | undefined
  },
): { [key: string]: string } {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}
