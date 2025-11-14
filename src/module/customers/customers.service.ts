import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { MicroserviceConfig } from 'src/config/microservices.config';

@Injectable()
export class CustomersService {

  constructor(

    @Inject(MicroserviceConfig.name) private readonly client: ClientProxy
  ) {



  }




  async findAll(params: { page: number; limit: number; filter?: string }) {

    return firstValueFrom(this.client.send({ cmd: 'findAllCustomers' }, params))

  }


}
