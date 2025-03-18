import { HttpStatusCode } from './code';

export class HttpError extends Error {
  code: HttpStatusCode;

  constructor(message: string, code: HttpStatusCode) {
    super(message);
    this.code = code;
    this.name = 'HttpError';

    Object.setPrototypeOf(this, new.target.prototype);
  }

  get description(): string {
    switch (this.code) {
      case HttpStatusCode.Unauthorized:
        return 'Unauthorized';
      case HttpStatusCode.Forbidden:
        return 'Forbidden';
      case HttpStatusCode.UnprocessableContent:
        return 'Unprocessable Content';
      case HttpStatusCode.InternalServerError:
        return 'Internal Server Error';
      default:
        return '';
    }
  }
}
