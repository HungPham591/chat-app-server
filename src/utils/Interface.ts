export enum Gender {
    MALE = 1,
    FEMALE = 0,
}
export enum PostType {
    TEXT = 0,
    IMAGE = 1,
    AUDIO = 2,
    VIDEO = 3,
    GAME = 4,
}
export enum Role {
    USER = 'user',
    ADMIN = 'admin',
}
export enum AccountType {
    FACEBOOK = 'facebook',
    GOOGLE = 'google',
    ADMIN = 'admin',
}
export enum SocketEvent {
    NEW_POST = 'new_post',
    NEW_QUESTION = 'new_question',
    ON_TYPING = 'on_typing',
    ON_FINISH_TYPING = 'on_finish_typing',
    SEND_MESSAGE = 'send_message',
    RECEIVE_MESSAGE = 'receive_message',
    FRIEND_REQUEST = 'friend_request',
    FRIEND_REQUEST_ACCEPT = 'friend_request_accept',
}