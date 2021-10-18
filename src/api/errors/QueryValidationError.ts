import { ValidationError } from "class-validator";
import { HttpError } from "routing-controllers";

export class QueryValidationError extends HttpError {
  constructor(validationErrors: ValidationError[]) {
    super(500);
    this.name = 'InvalidQueryError';
    const badProperties = [];
    validationErrors.forEach( error => {
      badProperties.push(error.property);
    })
    this.message = `Invalid query parameter(s): ${badProperties.toString()}}`
  }
}