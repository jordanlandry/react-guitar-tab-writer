import Note from "./components/Note";
import { createContext, useEffect, useState } from "react";
import { SetState, Tuning } from "./types";
import * as Tone from "tone";

const defaultTuning: Tuning = {
  stringCount: 6,
  notes: ["E2", "A2", "D3", "G3", "B3", "E4"],
};

type SynthContext = Tone.Synth;
type TuningContextType = { tuning: Tuning; setTuning: SetState<Tuning> };

export const SynthContext = createContext<SynthContext | undefined>(undefined);
export const TuningContext = createContext<TuningContextType>(
  {} as TuningContextType
);

function App() {
  const [tuning, setTuning] = useState<Tuning>(defaultTuning);
  const [synth, setSynth] = useState<SynthContext>();

  useEffect(() => {
    const synth = new Tone.Synth().toDestination();
    
    async () => {
      await Tone.start();
      setSynth(synth);
    };
  }, []);

  return (
    <>
      <h1>React Guitar</h1>
      <SynthContext.Provider value={synth}>
        <TuningContext.Provider value={{ tuning, setTuning }}>
          <Note
            string={4}
            fret={5}
            duration={0}
            isHammerOn={false}
            isPullOff={false}
            isHarmonic={false}
          />
        </TuningContext.Provider>
      </SynthContext.Provider>
    </>
  );
}

export default App;
