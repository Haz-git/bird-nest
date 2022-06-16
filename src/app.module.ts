import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdsController } from './birds/birds.controller';
import { BirdsModule } from './birds/birds.module';
import { BirdService } from './birds/birds.service';
import { LoggerMiddleware } from './birds/middleware/logger.middleware';

@Module({
    imports: [BirdsModule],
    controllers: [AppController, BirdsController],
    providers: [AppService, BirdService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('birds');
    }
}
