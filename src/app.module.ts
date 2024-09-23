import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from './config/typeorm.config';

@Module({
  imports: [TodosModule,
    TypeOrmModule.forRoot(typeOrmOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
