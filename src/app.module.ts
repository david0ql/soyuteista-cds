import { Module } from '@nestjs/common';
import { CarnetModule } from './carnet/carnet.module';
import { ScheduleModule } from './schedule/schedule.module';
import { QualificationModule } from './qualification/qualification.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CarnetModule,
    ScheduleModule,
    QualificationModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      username: 'APP_SOY_UTEISTA',
      password: 'vJKD!zYU!8RD',
      synchronize: true,
      connectString: "172.16.7.197:1535/ORAPROUTS"
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
