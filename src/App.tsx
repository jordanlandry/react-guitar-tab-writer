import Note from "./components/Note";
import { createContext, useEffect, useState } from "react";
import { SetState, Tuning } from "./types";
import * as Tone from "tone";
import { STANDARD_TUNING } from "./constants";
import { song } from "./sampleData/song";
import Song from "./components/Song";

type SynthContext = Tone.Synth;
type TuningContextType = { tuning: Tuning; setTuning: SetState<Tuning> };

export const SynthContext = createContext<SynthContext | undefined>(undefined);
export const TuningContext = createContext<TuningContextType>(
  {} as TuningContextType
);

function App() {
  const [tuning, setTuning] = useState<Tuning>(STANDARD_TUNING);
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
          <Song {...song} />
        </TuningContext.Provider>
      </SynthContext.Provider>
    </>
  );
}

export default App;
