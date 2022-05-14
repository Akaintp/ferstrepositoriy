import User from "../model/login.model";
import client from "./client";


async function findByEmail (email: string): Promise<User|null> {
    let sql = 'SELECT * FROM users WHERE email = $1'
    let res = await client.query(sql, [email])
    if (res.rows.length === 0 ){
        return null;
    }
    return res.rows[0] as User
}

export default {
    findByEmail
}






















