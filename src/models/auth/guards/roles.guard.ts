import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }
  private getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
  private matchRoles(roles: string[], userRole: string): boolean {
    return roles.includes(userRole);
  }
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());//tim yeu cau role cua route
    if (!roles) {//neu route khong co yeu cau ve role tra ve true
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.roles);
  }
}