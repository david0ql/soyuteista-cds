import { Controller, Get, Param } from '@nestjs/common';
import { QualificationService } from './qualification.service';

@Controller('qualification')
export class QualificationController {
  constructor(private readonly qualificationService: QualificationService) {}

  @Get(':correo')
  findOne(@Param('correo') correo: string) {
    return this.qualificationService.findOne(correo);
  }

}
