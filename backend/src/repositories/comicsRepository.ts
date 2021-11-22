import { EntityRepository, Repository } from 'typeorm';
import { Comics } from '../models/comics';


@EntityRepository(Comics)
class ComicsRepository extends Repository<Comics> { }

export { ComicsRepository };
