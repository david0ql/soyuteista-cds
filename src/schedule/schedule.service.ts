import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource
  ) {}

  async findOne(correo: string) {
    const result = await this.dataSource.query(`select * from table(academico.RETURN_OBJECTS_APP_HORARIO('${correo}'))`);
    if (result.length === 0) throw new NotFoundException("No encontramos el horario del estudiante")
    return {result};
  }

}
