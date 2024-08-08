import { Dispatch, ReactNode, SetStateAction } from "react";
import { AnyObject } from "yup";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  status: string;
  runtime: number;
  genres: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IActor {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface ChildProps {
  children: ReactNode;
}

export interface IContext {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: () => void;
  onClose: () => void;
  accounts: AnyObject;
  user: AnyObject;
  title: string;
  setTitle: (title: string) => void;
  body: string;
  picture: string;
  setPicture: (picture: string) => void;
  setBody: (body: string) => void;
  Save: () => void;
}

export interface IUser {
  uid: string;
  name: string;
  email: string;
}

export interface IAccount {
  _id: string;
  uid: string;
  name: string;
  pin: string;
}

export interface IList {
  accountId: string;
  poster_path: string;
  id: number;
  type: string;
  title: string;
}
