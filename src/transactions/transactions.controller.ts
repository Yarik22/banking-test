import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PaginationDto } from './dto/pagination.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { HttpService } from '@nestjs/axios';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly httpService: HttpService,
    ) {}
  
  @Get()
  async findAll(@Query()query:PaginationDto) {
    const [transactions, total] = await this.transactionsService.getPaginatedTransations(query)
    return {
      data: transactions,
      meta: {
          total,
          limit:transactions.length,
      },
    }
  }
  

  @Post() 
  async createOrder(@Body() data:CreateTransactionDto) { 
    const transaction =  await this.transactionsService.createTransaction(data); 
    this.httpService 
      .post(process.env.WEBHOOK_HTTP, {...transaction,categories:[...data.categories]}) 
      .subscribe({ 
        complete: () => { 
          console.log('completed'); 
        }, 
        error: (err) => { 
          console.log(err)
        }, 
      }); 
      return {...transaction,categories:data.categories}
 
  } 
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.transactionsService.deleteTransactionById(+id);
    }
}
