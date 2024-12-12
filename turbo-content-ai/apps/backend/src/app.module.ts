import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthentificationModule } from "./authentification/authentification.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [AuthentificationModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
