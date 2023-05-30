import {DataSource} from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "user",
    password: "password",
    database: 'db',
})
