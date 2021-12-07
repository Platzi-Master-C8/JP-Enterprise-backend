import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Vacancie, VacancieRelations} from '../models';

export class VacancieRepository extends DefaultCrudRepository<
  Vacancie,
  typeof Vacancie.prototype.id,
  VacancieRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Vacancie, dataSource);
  }
}
