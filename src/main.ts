import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './conf';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Categories')
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: envs.nasts_servers
      }
    });


  await app.listen();
  logger.log(`runing on port ${envs.port}`)
}
bootstrap();
