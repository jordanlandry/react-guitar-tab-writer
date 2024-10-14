import { TimeSignature } from "../types";

type Props = { duration: number; bpm: number; timeSignature: TimeSignature };
export default function calculateNoteDelayMs({
  duration,
  bpm,
  timeSignature,
}: Props) {
  const { numerator, denominator } = timeSignature;
  const beatsPerMeasure = numerator;
  const beatDuration = 60 / bpm;
  const measureDuration = beatDuration * beatsPerMeasure;
  const noteDuration = measureDuration / denominator;
  return noteDuration * duration * 1000;
}
