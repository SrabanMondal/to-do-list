'use server'
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
import { createPool } from "@vercel/postgres";
console.log('POSTGRES_URL:', process.env.POSTGRES_URL);
const url = process.env.POSTGRES_URL;
if(!url){
    throw new Error('Missing POSTGRES_URL in environment variables', url);
}
const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
});
module.exports = pool;