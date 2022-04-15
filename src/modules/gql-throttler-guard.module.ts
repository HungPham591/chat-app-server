// import { ThrottlerGuard } from '@nestjs/throttler';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class GqlThrottlerGuard extends ThrottlerGuard {
//   getRequestResponse(context: ExecutionContext) {
//     const gqlCtx = GqlExecutionContext.create(context);
//     const ctx = gqlCtx.getContext();
//     return { req: ctx.req, res: ctx.res }
//   }
// }
