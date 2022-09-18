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

export interface IBannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

export interface INewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface HotGoods {
  id: string;
  picture: string;
  title: string;
  alt: string;
}

export interface IBrand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc: string;
  place: string;
}

export interface IGood {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Child[];
  goods: Good[];
}

interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

interface Child {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}
