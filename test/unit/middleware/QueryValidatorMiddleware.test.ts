import { QueryValidatorMiddleware } from '../../../src/api/middleware/QueryValidatorMiddleware';
import { createRequest, createResponse } from 'node-mocks-http';

describe('QueryValidatorMiddleware tests', () => {
  test('There should be no findOptions on the request object if no query parameters are present.', () => {
    const req = createRequest({
      method: 'GET',
      url: '/api/stats'
    });
    const res = createResponse();
    const next = jest.fn();

    const validator = new QueryValidatorMiddleware();
    return validator.use(req, res, next).then(data => {
      expect(req.findOptions).toBeNull;
    })
  }),
  test('Should send a 500 error in response when given an unsupported query parameter', () => {
    const req = createRequest({
      method: 'GET',
      url: '/api/stats',
      query: {
        'garbage': 'additionalgarbage'
      }
    })
    const res = createResponse();
    const next = jest.fn();

    const validator = new QueryValidatorMiddleware();
    return validator.use(req, res, next).then(data => {
      expect(res.status).toBe(500);
    })
  }),
  test('Should ')
})