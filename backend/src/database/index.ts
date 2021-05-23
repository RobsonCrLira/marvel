import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Conctado ao banco'));
