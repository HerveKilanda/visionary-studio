import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { ClerkAuthGuard } from 'src/middleware/clerk-auth.guard';

@Controller("authentification")
export class AuthentificationController {
  constructor(
    private readonly authentificationService: AuthentificationService,
  ) {}
  @Get()
  @UseGuards(ClerkAuthGuard)
  async getUser(): Promise<any> {
    return this.authentificationService.getUser();
  }
}

 