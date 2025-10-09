import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { envs, INVOICE_SERVICE } from "src/config";
@Global()
@Module({
    imports: [
        ClientsModule.register([
            {

                name: INVOICE_SERVICE,
                transport: Transport.TCP,
                options: {
                    host: envs.invoiceHost,
                    port: envs.invoicePort,


                }
            },
            //pilas aqui mas
        ]),
    ],
    exports: [ClientsModule],
})
export class MicroservicesModule { }
