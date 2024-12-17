import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to enforce HTTPS header.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @param next - The Express NextFunction callback to pass control to the next middleware.
 */
const enforceHttps = (req: Request, res: Response, next: NextFunction): void => {
  if (req.header('x-forwarded-proto') !== 'https') {
    // Redirect HTTP requests to HTTPS
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
};

export default enforceHttps;
