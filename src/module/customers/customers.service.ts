import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { CUSTOMER_CMD } from '@novaCode/resource';

@Injectable()
export class CustomersService {

  constructor(

    @Inject('MAIN_MICROSERVICE') private readonly client: ClientProxy
  ) {



  }



  async create(dto: CreateCustomerDto) {
    return firstValueFrom(
      this.client.send(CUSTOMER_CMD.CREATE, dto),
    );
  }

  async update(payload: { id: number; data: UpdateCustomerDto }) {
    return firstValueFrom(
      this.client.send(CUSTOMER_CMD.UPDATE, payload)
    );
  }


  async getAll(params: { page: number; limit: number; filter?: string }) {

    return firstValueFrom(this.client.send(CUSTOMER_CMD.FIND_ALL, params))

  }


}
