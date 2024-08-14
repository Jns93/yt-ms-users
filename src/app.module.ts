import { Module } from '@nestjs/common';
import { featuresModules } from './modules';

@Module({
  imports: [...featuresModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
