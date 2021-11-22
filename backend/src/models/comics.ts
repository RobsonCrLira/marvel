import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comics')
class Comics {
    @PrimaryGeneratedColumn('uuid')
    id_uuid: string;

    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    thumbnail: string;


}
export { Comics };