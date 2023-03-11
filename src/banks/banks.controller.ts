import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';

@ApiTags("banks")
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @ApiOperation({summary:"Add bank"})
  @ApiResponse({type:Bank})  
  @Post()
  create(@Body() data: CreateBankDto) {
    return this.banksService.addBank(data);
  }

  @ApiOperation({summary:"Get all banks"})
  @ApiResponse({type:[Bank]})  
  @Get()
  findAll() {
    return this.banksService.getAllBanks();
  }

  @ApiOperation({summary:"Get bank by id"})
  @ApiResponse({type:Bank})  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksService.findBankById(+id);
  }

  @ApiOperation({summary:"Change bank data by id"})
  @ApiResponse({type:Bank})  
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBankDto) {
    return this.banksService.updateBankById(+id, data);
  }

  @ApiOperation({summary:"Delete bank by id"})
  @ApiResponse({type:Bank})  
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.banksService.deleteBankById(+id);
  }
}
