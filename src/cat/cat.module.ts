import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './entities/cat.entity';

@Module({
  controllers: [CatController],
  providers: [CatService],
  imports: [
    SequelizeModule.forFeature([Cat])
  ]
})
export class CatModule {}
