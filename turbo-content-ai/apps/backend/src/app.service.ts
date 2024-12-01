import { Injectable } from "@nestjs/common";
import { userSchema } from "@repo/types";
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  postHello(): typeof userSchema {
    return userSchema;
  }
}
