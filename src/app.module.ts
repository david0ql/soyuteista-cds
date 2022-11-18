import { Module } from '@nestjs/common';
import { CarnetModule } from './carnet/carnet.module';
import { ScheduleModule } from './schedule/schedule.module';
import { QualificationModule } from './qualification/qualification.module';


@Module({
  imports: [CarnetModule, ScheduleModule, QualificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
