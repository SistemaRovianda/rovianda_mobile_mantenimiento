export interface Record {
  titleFailure: string;
  date: string;
  image: string;
  description: string;
}

export interface NewRecord {
  typeFailure: string;
  description: string;
  fullName: string;
  dateInit: string;
}

interface FinishRecord {
  description: string;
  image: string;
  storeId: number;
  cost: number;
  deviceId: number;
}

interface Machine {
  name: string;
  model: string;
  costDevice: number;
  storeId: number;
}
