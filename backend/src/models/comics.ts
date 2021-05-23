import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comics')
class Charactes {
    @PrimaryGeneratedColumn('uuid')
    id_uuid: string;

    @Column()
    id: number;

    @Column()
    comics_name: string;

    @Column()
    description: string;

}
export { Charactes };