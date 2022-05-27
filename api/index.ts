import type { VercelRequest, VercelResponse } from '@vercel/node';
import Http from '../http/Http'

export default async (request: VercelRequest, response: VercelResponse) => {
  const body = {
    request: request,
    response: response
  }
  const result = await new Http("user/login").post()
  response.status(200).send(JSON.stringify(result));
};