import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'

import { AddRoomDto } from './add-room.dto'
import { RoomsService } from './rooms.service'

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get('all')
  getAll() {
    return this.roomsService.getAll()
  }

  @Post('add-room')
  addRoom(@Body() addRoomDto: AddRoomDto) {
    return this.roomsService.addRoom(addRoomDto)
  }

  @Delete('remove-room/:roomId')
  removeRoom(@Param('roomId') roomId: string) {
    return this.roomsService.removeRoom(roomId)
  }
}
