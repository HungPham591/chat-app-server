import { Field, InputType, Int } from "@nestjs/graphql";
import { Constants } from "src/constants/Constants";

@InputType()
export class PaginationArgs {
    @Field((type) => Int, { nullable: true })
    offset: number = 0;

    @Field((type) => Int, { nullable: true })
    limit: number = Constants.SIZE_PER_PAGE;
}