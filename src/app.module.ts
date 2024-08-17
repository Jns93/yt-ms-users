import { Module, ValidationPipe } from '@nestjs/common';
import { featuresModules } from './modules';
import { globalModules } from './modules/global';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ...globalModules, 
    ...featuresModules
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }
  ],
})
export class AppModule {}
