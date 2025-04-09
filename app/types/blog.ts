type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  author: Author;
  tags: string[];
  publishDate: string;
  blogURL: string;
};
