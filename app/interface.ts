export interface BreedSelected {
  no: number;
  rice_Type: string;
  rice_name: string;
  department: string;
  owner: string;
  position: string;
  history: string;
  characteristics: string[];
  Features: string[];
  area: string;
  Limitations: string;
  image: string;
}

export type BreedSelectedState = {
  state: BreedSelected;
  set: () => void;
  reset: () => void;
  empty: () => void;
};
