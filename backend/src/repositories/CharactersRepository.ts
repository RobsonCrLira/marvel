import { EntityRepository, Repository } from 'typeorm';
import { Characters } from '../models/characters';


@EntityRepository(Characters)
class CharactersRepository extends Repository<Characters> { }

export { CharactersRepository };
