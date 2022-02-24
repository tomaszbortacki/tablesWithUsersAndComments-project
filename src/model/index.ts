interface UserI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: number;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface CommentI {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type UsersT = Array<UserI>;

export type CommentsT = Array<CommentI>;
