import * as mysql from 'mysql';
import Users from './users';
import config from '../config/configuration';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err) console.log("error",err);
});
export default {
    Users
}
