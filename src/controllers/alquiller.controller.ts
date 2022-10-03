import { Controller, Get } from '@nestjs/common';
import { AlquillerService } from 'src/services/alquiller.service';

@Controller()
export class AlquillerController {
  constructor(private readonly alquillerService: AlquillerService) { }

  @Get()
  alquiller() {
    return this.alquillerService.findAll();
  }
}
