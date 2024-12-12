import { clerkClient } from "@clerk/clerk-sdk-node";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthentificationService {
  getUser(): Promise<any> {
    return clerkClient.users.getUserList();
  }
}
