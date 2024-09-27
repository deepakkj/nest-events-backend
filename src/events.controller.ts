import { Controller, Delete, Get, Post, Patch, Param, Body } from "@nestjs/common";
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from "./update-event.dto";

@Controller({
    path: '/events'
})
export class EventsController {
    @Get()
    findAll() {

    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return id;
    }
    @Post()
    create(@Body() input: CreateEventDto) {
        return input;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() input: UpdateEventDto) {
        return {id, input};
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return id;
    }
}