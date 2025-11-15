import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";
@Global()
@Module({
    imports: [
        ClientsModule.registerAsync([
            {

                name: 'MAIN_MICROSERVICE',
                inject: [ConfigService],
                useFactory: (config: ConfigService) => ({
                    transport: Transport.TCP,
                    options: {
                        host: config.get<string>('PLANTS_MICROSERVICES_HOST'),
                        port: config.get<number>('PLANTS_MICROSERVICES_PORT')
                    },
                }),
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class MicroservicesModule { }
