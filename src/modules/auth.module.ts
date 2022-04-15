import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';

// @Injectable()// dung de xac thuc nguoi dung
// export class AuthGuard implements CanActivate {
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const ctx: any = GqlExecutionContext.create(context).getContext();
//         if (!ctx.headers.authorization) {
//             return false;
//         }
//         ctx.user = await this.validateToken(ctx.headers.authorization);
//         return true;
//     }

//     async validateToken(auth: string) {
//         if (auth.split(' ')[0] !== 'Bearer') {
//             throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
//         }
//         const token = auth.split(' ')[1];

//         try {
//             const decoded: any = await jwt.verify(token, process.env.SECRET);

//             return decoded;
//         } catch (err) {
//             const message = 'Token error: ' + (err.message || err.name);
//             throw new HttpException(message, HttpStatus.UNAUTHORIZED);
//         }
//     }
// }

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);