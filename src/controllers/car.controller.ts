import { Controller, Get } from '@nestjs/common';
import { CarService } from 'src/services/car.service';

@Controller()
export class CarController {
  constructor(private readonly carService: CarService) { }

  @Get()
  cars() {
    return this.carService.findAll();
  }
}
