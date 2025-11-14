export const MicroserviceConfig = {
    name: 'MAIN_MICROSERVICE',
    transport: 'tcp',
    host: process.env.MS_HOST || 'localhost',
    port: Number(process.env.MS_PORT) || 3005
};