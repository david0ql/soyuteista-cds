import { Controller, Get, Param } from '@nestjs/common';
import { CarnetService } from './carnet.service';


@Controller('carnet')
export class CarnetController {
  constructor(private readonly carnetService: CarnetService) {}

  @Get(':correo')
  findAll(@Param('correo') correo : string) {
    return this.carnetService.findAll(correo);
  }

}
