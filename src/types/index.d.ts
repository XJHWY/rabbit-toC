export interface IApiRes<T> {
  code: string;
  msg: string;
  result: T;
}
export interface ICategoryItem {
  id: string;
  name: string;
  picture: string;
  children: IChild[];
  goods: IGood[];
  open?: boolean;
}

export interface IGood {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

export interface IChild {
  id: string;
  name: string;
  picture: string;
  children?: any;
  goods?: any;
}
