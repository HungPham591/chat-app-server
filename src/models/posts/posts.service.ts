import { Post, PostsDocument } from './posts.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostsDTO, PostsRO } from './posts.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name)
        private readonly postModel: Model<PostsDocument>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    private toCondition() {
        return {};
    }
    async get(): Promise<PostsRO[]> {
        const posts = this.postModel.find();
        return posts;
    }
    async getOne(id: string): Promise<PostsRO> {
        const post = this.postModel.findById(id);
        return post;
    }
    async create(data: PostsDTO): Promise<PostsRO> {
        const post = new this.postModel(data).save();
        return post;
    }
    async update(id: string, data: Partial<PostsDTO>): Promise<PostsRO> {
        const post = await this.postModel.findByIdAndUpdate(id, data);
        return post;
    }
    async delete(id: string): Promise<PostsRO> {
        const post = await this.postModel.findByIdAndDelete(id);
        return post;
    }
}
