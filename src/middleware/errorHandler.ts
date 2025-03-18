import { ValidateError } from 'tsoa';
import { ZodError } from 'zod';

import { HttpError, HttpStatusCode } from '../http';

import type { Response, Request, NextFunction } from 'express';

function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ValidateError) {
    res.status(HttpStatusCode.UnprocessableContent).json({
      status: 'failed',
      error_code: HttpStatusCode.UnprocessableContent,
      error_description: 'Validation Failed',
      error_details: err?.fields,
    });
  } else if (err instanceof ZodError) {
    res.status(HttpStatusCode.UnprocessableContent).json({
      status: 'failed',
      error_code: HttpStatusCode.UnprocessableContent,
      error_description: 'Validation Failed',
      error_details: err?.issues,
    });
  } else if (err instanceof HttpError) {
    res.status(err.code).json({
      status: 'failed',
      error_code: err.code,
      error_description: err.description,
      error_details: err.message,
    });
  } else if (err instanceof Error) {
    res.status(HttpStatusCode.InternalServerError).json({
      status: 'failed',
      error_code: HttpStatusCode.InternalServerError,
      error_description: 'Internal Server Error',
      error_details: err.message,
    });
  } else {
    next();
  }
}

export default errorHandler;
