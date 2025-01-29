import { ValidateError } from 'tsoa';
import { ZodError } from 'zod';

import type { Response, Request, NextFunction } from 'express';

function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ValidateError) {
    res.status(422).json({
      status: 'failed',
      error_code: 422,
      error_description: 'Validation Failed',
      error_details: err?.fields,
    });
  } else if (err instanceof ZodError) {
    res.status(422).json({
      status: 'failed',
      error_code: 422,
      error_description: 'Validation Failed',
      error_details: err?.issues,
    });
  } else if (err instanceof Error) {
    res.status(500).json({
      status: 'failed',
      error_code: 500,
      error_description: 'Internal Server Error',
      error_details: err.message,
    });
  } else {
    next();
  }
}

export default errorHandler;
