import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

const methods = {
  GET: 'read',
  POST: 'create',
  PATH: 'update',
  PUT: 'update',
  DELETE: 'delete'
};

@Injectable()
export class PermissionInterceptor implements NestInterceptor {
  constructor(private readonly prisma: PrismaService) {}
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { user, url, method } = request;

    const fetchedPermission = await this.prisma.permissionLevel.findFirst({
      where: {
        page: {
          contains: url.split('/')[1]
        },
        permission: {
          user: {
            some: {
              id: user.id
            }
          }
        }
      }
    });

    if (!fetchedPermission) {
      throw new UnauthorizedException('Sem autorização para acessar essa rota');
    }

    if (!fetchedPermission[methods[method]]) {
      throw new UnauthorizedException('Sem autorização para acessar esse método');
    }

    return next.handle();
  }
}
