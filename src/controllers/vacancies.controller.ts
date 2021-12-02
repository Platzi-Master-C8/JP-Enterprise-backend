import {inject} from '@loopback/core';
import {del, get, post, put, Request, response, RestBindings} from '@loopback/rest';

export class VacanciesController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  // list vacancies
  @get('/vacancies')
  @response(200)
  listAll(): object {
    return {
      message: 'List vacancies',
      data: []
    };
  }

  // show vacancie
  @get('/vacancies/{id}')
  @response(200)
  show(): object {
    return {
      message: 'List vacancies',
      data: [],
      req: Object.assign({}, this.req.body),
    };
  }

  // store vacancie
  @post('/vacancies')
  @response(201)
  store(): object {
    return {
      message: 'List vacancies',
      data: []
    };
  }

  // list vacancies
  @put('/vacancies/{id}')
  @response(200)
  update(): object {
    return {
      message: 'List vacancies',
      data: []
    };
  }

  // list vacancies
  @del('/vacancies/{id}')
  @response(200)
  destroy(): object {
    return {
      message: 'List vacancies',
      data: []
    };
  }
}
