export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type RefType<T> = React.MutableRefObject<T>;


export type Tuning = {stringCount: number, notes: string[]};
export type TimeSignature = { numerator: number; denominator: number };

export type BendProps = { step: number; duration: number };
export type SlideProps = { to: number; duration: number };

export type NoteType = {
  string: number;
  fret: number;
  duration: number;

  isHammerOn: boolean; 
  isPullOff: boolean;
  isHarmonic: boolean;

  bend?: BendProps;
  slide?: SlideProps;
};

export type Beat = {
  timeSignature: TimeSignature;
  tempo: number;
  notes: NoteType[];
};

export type Instrument = {
  name: string;
  beats: Beat[];
  volume: number;
};

export type Song = {
  name: string;
};
