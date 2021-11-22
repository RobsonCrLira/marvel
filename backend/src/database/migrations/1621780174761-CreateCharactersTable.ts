import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCharactersTable1621780174761 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {

		await queryRunner.createTable(new Table({
			name: 'characters',
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
		await queryRunner.dropTable('characters');
	}

}
