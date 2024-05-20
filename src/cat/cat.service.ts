import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat) private catRepository: typeof Cat) {}
  async create(createCatDto: CreateCatDto) {
    const cat = await this.catRepository.create(createCatDto);
    return cat;
  }

  async findAll() {
    const cats = await this.catRepository.findAll();
    return cats;
  }

  async findOne(id: number) {
    const cat = await this.catRepository.findOne<Cat>({where: {id: id}});
    if (!cat) throw new NotFoundException("Cat not found");
    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    await this.findOne(id);

    await this.catRepository.update({ ...updateCatDto }, { where: { id }, returning: true });

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.catRepository.destroy({where: {id}});
  }
}
