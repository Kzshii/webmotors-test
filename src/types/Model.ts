import { Make } from './Make';

export class Model extends Make {
  MakeID: number;

  constructor(props: any = {}) {
    super();
    Object.assign(this, props);
    this.MakeID = props.MakeID ? props.MakeID : 0;
  }
}
