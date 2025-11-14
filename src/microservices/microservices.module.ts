import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { CUSTOMER_SERVICE, envs, INVOICE_SERVICE } from "src/config";
import { MicroserviceConfig } from "src/config/microservices.config";
@Global()
@Module({
    imports: [
        ClientsModule.register([
            {

                name: MicroserviceConfig.name,
                transport: Transport.TCP,
                options: {
                    host: MicroserviceConfig.host,
                    port: MicroserviceConfig.port,


                }
            },





            //pilas aqui mas
        ]),
    ],
    exports: [ClientsModule],
})
export class MicroservicesModule { }
