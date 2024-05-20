import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cat } from './entities/cat.entity';

@ApiTags("Cats")
@Controller('/api/cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @ApiOperation({summary: "creates a cat"})
  @ApiResponse({status: HttpStatus.CREATED, type: Cat})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catService.create(createCatDto);
  }

  @ApiOperation({summary: "return an array of cats"})
  @ApiResponse({status: HttpStatus.OK, type: [Cat]})
  @Get()
  async findAll() {
    return await this.catService.findAll();
  }

  @ApiOperation({summary: "return a cat by id"})
  @ApiResponse({status: HttpStatus.OK, type: Cat})
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Cat not found" })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return await this.catService.findOne(+id);
  }

  @ApiOperation({summary: "updates cat by id"})
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Cat not found" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return await this.catService.update(+id, updateCatDto);
  }

  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Cat not found" })
  @ApiResponse({ status: HttpStatus.OK, description: "Cat was deleted" })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.catService.remove(+id);
    return {
      message: `Cat with id ${id} was deleted`
    }
  }
}
