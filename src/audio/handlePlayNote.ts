import { Tuning } from "../types";
import { getNoteName } from "../util/getNoteName";
import * as Tone from "tone";

type Props = { tuning: Tuning; string: number; fret: number };
export const handlePlayNote = ({ tuning, string, fret }: Props) => {
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
