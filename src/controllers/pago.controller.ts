import { Controller, Get } from '@nestjs/common';
import { PagoService } from 'src/services/pago.service';

@Controller()
export class PagoController {
  constructor(private readonly pagoService: PagoService) { }

  @Get()
  pago() {
    return this.pagoService.findAll();
  }
}