import * as mysql from 'mysql'

export async function fetchTransfersHistory(actorName?: string):Promise< any > {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection({
            host        : process.env.NEXT_PUBLIC_BDATA_HOST,
            user        : process.env.NEXT_PUBLIC_BDATA_USER,
            password    : process.env.NEXT_PUBLIC_BDATA_PASSWORD,
            database    : process.env.NEXT_PUBLIC_BDATA_DB,
            port        : parseInt(process.env.NEXT_PUBLIC_BDATA_PORT!)
        });
        connection.connect();
        connection.query(`SELECT * FROM proton_TRANSFERS where account_name='${actorName}' ORDER BY seq DESC`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
            connection.end();
        })
            
    })
    

}