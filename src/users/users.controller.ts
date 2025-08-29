import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {

    }
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.userService.findAll(role);
    }

    @Get(':id')
    find(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() user: {id: number, name: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.userService.create(user);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() user: {}) {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return { id };
    }
}
