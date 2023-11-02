import { postsUrl } from '../constants';

export const getPosts = async () => {
  const res = await fetch(postsUrl);
  return res.json();
};
