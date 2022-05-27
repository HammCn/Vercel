import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  const body = {
    request: request,
    response: response
  }
  response.status(200).send(JSON.stringify(body));
};