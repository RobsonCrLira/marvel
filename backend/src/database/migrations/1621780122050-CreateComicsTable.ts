import { table } from 'console';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateComicsTable1621780122050 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {

		await queryRunner.createTable(new Table({
			name: 'comics',
			columns: [
				{
					name: 'id_uuid',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
					default: 'uuid_generate_v4()'
				},
				{
					name: 'id',
					type: 'int',
					isUnique: true
				},
				{
					name: 'name',
					type: 'varchar',
				},
				{
					name: 'description',
					type: 'text',
				},
				{
					name: 'thumbnail',
					type: 'varchar',
				},
			]
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('comics');
	}

}
