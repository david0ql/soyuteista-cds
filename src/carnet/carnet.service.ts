import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class CarnetService {


  constructor(
    private readonly connection: Connection
  ) {}

  async findAll( correo: string) {
    const result = await this.connection.query(`select * from table(academico.RETURN_OBJECTS_APP_HORARIO(${correo}))`)
    return {result};
  }


}
