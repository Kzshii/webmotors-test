import { Make } from './Make';

export class Version extends Make {
  modelId: number;

  constructor(props: any = {}) {
    super();
    Object.assign(this, props);
    this.modelId = props.modelId ? props.modelId : 0;
  }
}
