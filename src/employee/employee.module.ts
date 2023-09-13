import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CreateConsumer } from './create.consumer';
import { UpdateConsumer } from './update.consumer';

@Module({
  imports: [KafkaModule],
  providers: [EmployeeService, CreateConsumer, UpdateConsumer],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
