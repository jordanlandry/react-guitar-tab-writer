import { useContext } from "react";
import { NoteType } from "../types";
import { getNoteName } from "../util/getNoteName";

import * as Tone from "tone";
import { TuningContext } from "../App";

type Props = {} & NoteType;

export default function Note({
  string,
  fret,
  duration,
  isHammerOn,
  isPullOff,
  isHarmonic,
  bend,
  slide,
}: Props) {
  const { tuning } = useContext(TuningContext);

  const handlePlayNote = () => {
    const noteName = getNoteName(tuning, string, fret);

    const play = async () => {
      await Tone.start();

      const synth = new Tone.Synth().toDestination();
      const now = Tone.now();

      synth.triggerAttack(noteName, now);
      synth.triggerRelease(now + 1);
    };

    play();
  };

  return (
    <div>
      <div>String: {string}</div>
      <div>Fret: {fret}</div>
      <div>Duration: {duration}</div>
      <div>Hammer On: {isHammerOn ? "Yes" : "No"}</div>
      <div>Pull Off: {isPullOff ? "Yes" : "No"}</div>
      <div>Harmonic: {isHarmonic ? "Yes" : "No"}</div>
      {bend && (
        <div>
          Bend: {bend.step} {bend.duration}
        </div>
      )}
      {slide && (
        <div>
          Slide: {slide.to} {slide.duration}
        </div>
      )}

      <button onClick={handlePlayNote}>Play Note</button>
    </div>
  );
}
