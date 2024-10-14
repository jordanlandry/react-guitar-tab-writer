import { useEffect, useState } from "react";
import { SongType } from "../types";
import Note from "./Note";
import { handlePlayNote } from "../audio/handlePlayNote";
import * as Tone from "tone";
import { sleep } from "../audio/sleep";
import calculateNoteDelayMs from "../util/calculateNoteDelay";

type Props = {} & SongType;

export default function Song({ name, instruments }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeInstrumentIndex, setActiveInstrumentIndex] = useState(0);
  const activeInstrument = instruments[activeInstrumentIndex];

  const togglePlay = () => setIsPlaying((prev) => !prev);

  useEffect(() => {
    const playNotes = async () => {
      if (!isPlaying) return;

      const measure = activeInstrument.measures[0];
      const beats = measure.beats;

      for (const beat of beats) {
        for (const note of beat) {
          handlePlayNote({ tuning: activeInstrument.tuning, ...note });
          const noteDelay = calculateNoteDelayMs({
            duration: note.duration,
            bpm: measure.tempo,
            timeSignature: measure.timeSignature,
          });

          await sleep(noteDelay);
        }
      }
    };

    if (isPlaying) playNotes();
    return () => setIsPlaying(false);
  }, [isPlaying, activeInstrument]);

  return (
    <>
      <h1>{name}</h1>
      <h2>{activeInstrument.name}</h2>
      <button onClick={togglePlay}>{isPlaying ? "Stop" : "Play"}</button>

      {activeInstrument.measures.map((measure, measureIndex) => {
        return (
          <div key={measureIndex}>
            <h3>Measure {measureIndex + 1}</h3>
            {measure.beats.map((beat, beatIndex) => {
              return (
                <div key={beatIndex}>
                  <h4>Beat {beatIndex + 1}</h4>
                  {beat.map((note, noteIndex) => {
                    return <Note key={noteIndex} {...note} />;
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
