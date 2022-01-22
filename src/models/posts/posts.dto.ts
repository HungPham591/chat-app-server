

export class PostsDTO {
    user_id: string;
    gender_id: string;
    interested_in_gender_id: string;
    category_id: string;
    service_id: string;
    language_id: string;
    image_link: string;
    content: string;
    birthday: number;
}
export class PostsRO {
    _id: string;
    user_id?: string;
    gender_id?: string;
    interested_in_gender_id?: string;
    category_id?: string;
    service_id?: string;
    language_id?: string;
    image_link?: string;
    content?: string;
    birthday?: number;
    createdAt?: Date;
}