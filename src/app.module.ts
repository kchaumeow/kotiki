import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    CatModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: +process.env.MYSQL_DB_PORT,
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_USER_PASS,
    database: process.env.MYSQL_DATABASE_NAME,
    models: [],
    autoLoadModels: true,
  }), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
