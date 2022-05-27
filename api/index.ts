import type { VercelRequest, VercelResponse } from '@vercel/node';
import Http from '../http/Http'

export default (request: VercelRequest, response: VercelResponse) => {
  const body = {
    request: request,
    response: response
  }
  new Http("user/login").post().then((data) => {
    response.status(200).send(JSON.stringify(data));
  })
};