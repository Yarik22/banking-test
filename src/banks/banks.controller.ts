import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Post()
  create(@Body() data: CreateBankDto) {
    return this.banksService.addBank(data);
  }

  @Get()
  findAll() {
    return this.banksService.getAllBanks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksService.findBankById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBankDto) {
    return this.banksService.updateBankById(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.banksService.deleteBankById(+id);
  }
}
