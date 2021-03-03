export interface DynamicsModel {
  id: number,
  date: string,
  rate: number
}

export interface DynamicsObjectModel {
  dynamics: DynamicsModel[]
}
