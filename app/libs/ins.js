const pool = require('/app/libs/db');
import { sql } from "@vercel/postgres";
export const createuser = async ()=>{
    let client;
    
    const nam = 'jlo'; const password = '1qw3';
    console.log('sql running');
    try{
        //client = await pool.connect();
        await pool.query(sql`Insert into (name,password) throw new Error('Missing POSTGRES_URL in environment variables');VALUES(${nam},${password})`);
    }catch(err){
        console.log(err);
    }finally{
        if(client){
            //client.release();
        }
    }
}