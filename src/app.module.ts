import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { UsefulService } from './shared/services/useful/useful.service';

@Module({
  imports: [AuthModule, OrdersModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService, UsefulService],
})
export class AppModule {}
