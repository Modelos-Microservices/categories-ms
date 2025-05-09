import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @MessagePattern({cmd: 'createCategory'})
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @MessagePattern({cmd: 'findAllCategories'})
  findAll() {
    return this.categoriesService.findAll();
  }

  @MessagePattern({cmd: 'findOneCategory'})
  findOne(@Payload() id: string) {
    return this.categoriesService.findOne(id);
  }

  @MessagePattern({cmd: 'verifyCategory'})
  verifyCategory(@Payload() id: string) {
    return this.categoriesService.verifyCategory(id);
  }

  @MessagePattern({cmd: 'updateCategory'})
  update(@Payload() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(updateCategoryDto.id, updateCategoryDto);
  }

  @MessagePattern({cmd: 'removeCategory'})
  remove(@Payload() id: string) {
    return this.categoriesService.remove(id);
  }
}
