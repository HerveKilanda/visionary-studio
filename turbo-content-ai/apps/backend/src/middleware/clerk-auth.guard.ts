import { clerkClient } from "@clerk/clerk-sdk-node";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from "@nestjs/common";

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger();
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      await clerkClient.verifyToken(request.cookies.__session);
    } catch (error) {
      this.logger.error(error);
      return false;
    }
    return true;
  }
}
