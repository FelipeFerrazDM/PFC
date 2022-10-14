import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EduCashOn',
    password: 'Elesandra237',
    port: 5432
});