import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;
    return this.categoryRepository.save(category);
  }

  async findAll(take: number, skip: number) {
    const [categories, total] = await this.categoryRepository.findAndCount({
      take,
      skip,
      order: {
        name: 'ASC',
      },
    });

    return {
      categories,
      total,
    };
  }

  async findOne(id: string, products?: string) {
    const options: FindManyOptions<Category> = {
      where: {
        id,
      },
    };

    if (products === 'true') {
      options.relations = {
        products: true,
      };
      options.order = {
        products: {
          id: 'DESC',
        },
      };
    }

    const category = await this.categoryRepository.findOne(options);
    if (!category) {
      throw new NotFoundException('La Categoria no existe');
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    category.name = updateCategoryDto.name;
    return await this.categoryRepository.save(category);
  }

  async remove(id: string) {
    const category = await this.findOne(id);
    await this.categoryRepository.softDelete(id);
    return { message: 'Categoria Eliminada' };
  }
}
