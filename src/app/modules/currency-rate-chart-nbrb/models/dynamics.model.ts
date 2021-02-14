export interface IDynamicsModel {
  Cur_ID: number,
  Date: string,
  Cur_OfficialRate: number
}

export interface DynamicsObjectModel {
  dynamics: IDynamicsModel[]
}
