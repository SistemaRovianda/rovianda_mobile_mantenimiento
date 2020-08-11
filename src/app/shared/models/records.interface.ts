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

export interface FinishRecord {
  description: string;
  image: string;
  storeId: number;
  cost: number;
  deviceId: number;
}

export interface Machine {
  name: string;
  model: string;
  costDevice: number;
  storeId: number;
}

export interface Shop {
  name: string;
  location: string;
  reference: string;
}
