import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Vacancie} from '../models';
import {VacancieRepository} from '../repositories';

export class VacancieController {
  constructor(
    @repository(VacancieRepository)
    public vacancieRepository: VacancieRepository,
  ) { }

  @post('/vacancies')
  @response(200, {
    description: 'Vacancie model instance',
    content: {'application/json': {schema: getModelSchemaRef(Vacancie)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacancie, {
            title: 'NewVacancie',
            exclude: ['id'],
          }),
        },
      },
    })
    vacancie: Omit<Vacancie, 'id'>,
  ): Promise<Vacancie> {
    return this.vacancieRepository.create(vacancie);
  }

  @get('/vacancies/count')
  @response(200, {
    description: 'Vacancie model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Vacancie) where?: Where<Vacancie>,
  ): Promise<Count> {
    return this.vacancieRepository.count(where);
  }

  @get('/vacancies')
  @response(200, {
    description: 'Array of Vacancie model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Vacancie, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Vacancie) filter?: Filter<Vacancie>,
  ): Promise<Vacancie[]> {
    return this.vacancieRepository.find(filter);
  }

  @patch('/vacancies')
  @response(200, {
    description: 'Vacancie PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacancie, {partial: true}),
        },
      },
    })
    vacancie: Vacancie,
    @param.where(Vacancie) where?: Where<Vacancie>,
  ): Promise<Count> {
    return this.vacancieRepository.updateAll(vacancie, where);
  }

  @get('/vacancies/{id}')
  @response(200, {
    description: 'Vacancie model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Vacancie, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Vacancie, {exclude: 'where'}) filter?: FilterExcludingWhere<Vacancie>
  ): Promise<Vacancie> {
    return this.vacancieRepository.findById(id, filter);
  }

  @patch('/vacancies/{id}')
  @response(204, {
    description: 'Vacancie PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacancie, {partial: true}),
        },
      },
    })
    vacancie: Vacancie,
  ): Promise<void> {
    await this.vacancieRepository.updateById(id, vacancie);
  }

  @put('/vacancies/{id}')
  @response(204, {
    description: 'Vacancie PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vacancie: Vacancie,
  ): Promise<void> {
    await this.vacancieRepository.replaceById(id, vacancie);
  }

  @del('/vacancies/{id}')
  @response(204, {
    description: 'Vacancie DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vacancieRepository.deleteById(id);
  }
}
