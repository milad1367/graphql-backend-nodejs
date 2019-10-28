
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Comment {
    id?: number;
    name?: string;
    content?: string;
    avatar?: string;
}

export class Post {
    id?: string;
    name?: string;
    comments?: Comment[];
    image?: string;
    content?: string;
    avatar?: string;
}

export abstract class IQuery {
    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Post | Promise<Post>;
}
