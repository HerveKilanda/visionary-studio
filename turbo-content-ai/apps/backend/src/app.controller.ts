import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { create } from "domain";
import { userSchema } from "@repo/types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("hello")
  postHello(@Body() createUserDto: typeof userSchema) {
    const userData = {
      nom: " Kilanda",
      prenom: " Jean",
      age: 21,
    };
    const parsedUser = userSchema.parse(userData);
    return parsedUser;
  }
}
