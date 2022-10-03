import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './controllers/car.controller';
import { Alquiller } from './entities/alquiller.entity';
import { Car } from './entities/car.entity';
import { Cliente } from './entities/cliente.entity';
import { Pago } from './entities/pago.entity';
import { CarService } from './services/car.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'concessionaire',
      entities: [Car, Alquiller, Pago, Cliente],
      synchronize: true,
    })

  ],
  controllers: [CarController],
  providers: [CarService],
})
export class AppModule { }
