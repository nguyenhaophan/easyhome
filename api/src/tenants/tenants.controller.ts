import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { FavoriteDto } from './dto/favorite.dto'
import { LoginTenantDto } from './dto/login-tenant.dto'
import { RegisterTenantDto } from './dto/register-tenant.dto'
import { TenantsService } from './tenants.service'

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get('all')
  getAll() {
    return this.tenantsService.getAll()
  }

  @Post('login')
  loginTenant(@Body() loginTenantDto: LoginTenantDto) {
    return this.tenantsService.findOne(loginTenantDto)
  }

  @Post('register')
  registerTenant(@Body() registerTenantDto: RegisterTenantDto) {
    return this.tenantsService.registerTenant(registerTenantDto)
  }

  @Put('add-favorite')
  addFav(@Body() favDto: FavoriteDto) {
    const { tenantId, roomId } = favDto

    return this.tenantsService.addFav(tenantId, roomId)
  }

  @Put('remove-favorite')
  removeFav(@Body() favDto: FavoriteDto) {
    const { tenantId, roomId } = favDto

    return this.tenantsService.removeFav(tenantId, roomId)
  }

  @Delete('delete/:tenantId')
  deleteTenant(@Param('tenantId') tenantId: string) {
    return this.tenantsService.deleteTenant(tenantId)
  }
}
