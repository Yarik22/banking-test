import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionAmountStatisticDto } from './dto/transaction-statistic.dto';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}
  
  @Get('category-balance')
  getBalance(@Body()data:TransactionAmountStatisticDto){
    return this.statisticsService.getTotalAmountOfCategories(data)
  }
}
