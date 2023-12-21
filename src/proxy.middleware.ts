import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { nanoid } from 'nanoid';

export class ReverseProxyMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: 'http://localhost:3000',
    pathRewrite: {
      '/proxy': '',
    },
    secure: false,
    onProxyReq: (proxyReq, req) => {
      const userId = req.headers['id'];
      if (userId) {
        const nanoId = nanoid(36).toString();
        const modifiedUserId = `${userId}-${nanoId}`;
        proxyReq.setHeader('id', modifiedUserId);
      }
    },
  });

  use(req: Request, res: Response, next: () => void) {
    this.proxy(req, res, next);
  }
}
