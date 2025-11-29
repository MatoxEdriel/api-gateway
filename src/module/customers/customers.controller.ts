import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Payload } from '@nestjs/microservices';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Get()
  async getAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('filter') filter?: string,

  ) {
    const params = { page, limit, filter }

    return this.customersService.getAll(params);
  }

  @Post()
  async create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }


  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCustomerDto) {
    const payload = { id, data };
    return this.customersService.update(payload);
  }

}
