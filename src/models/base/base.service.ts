import { PaginationArgs } from './base.args';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class BaseService {
    ensureOwnership(userId: string, ownerId: string): boolean {
        if (userId !== ownerId) {
            throw new HttpException('Incorrect User', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
    async argsToCondition(args) {
        return { PaginationArgs, ...args };
    }
}