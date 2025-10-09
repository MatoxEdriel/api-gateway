/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  INVOICES_MICROSERVICES_HOST: string;
  INVOICES_MICROSERVICES_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    INVOICES_MICROSERVICES_HOST: joi.string().required(),
    INVOICES_MICROSERVICES_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);
if (error) {
  throw new Error('Config validation error: ' + error.message);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  invoiceHost: envVars.INVOICES_MICROSERVICES_HOST,
  invoicePort: envVars.INVOICES_MICROSERVICES_PORT,
};
