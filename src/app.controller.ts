import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health-check')
  healthCheck(): string {
    return 'Webhook Testing is healthy';
  }

  @Post('webhook')
  webhookWebhook(@Body() body: any): string {
    this.logger.debug(
      "Received webhook",
      JSON.stringify(body, null, 2)
    );
    return "success received";
  }
}
