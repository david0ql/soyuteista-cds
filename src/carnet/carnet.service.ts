import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class CarnetService {


  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource
  ) {}

  async findAll( correo: string) {
    const result = await this.dataSource.query(`select * from table(academico.RETURN_OBJECTS_APP_CARNE('${correo}'))`)
    return {result};
  }


}
