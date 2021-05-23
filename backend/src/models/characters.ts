import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('characters')
class Charactes {
    @PrimaryGeneratedColumn('uuid')
    id_uuid: string;

    @Column()
    id: number;

    @Column()
    characters_name: string;

    @Column()
    description: string;

}
export { Charactes };