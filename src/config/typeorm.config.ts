import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost', // Use 'db' if connecting from within another Docker container
    port: 5432,
    username: 'postgres',
    password: '123456', // Ensure this matches the Docker config
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}
