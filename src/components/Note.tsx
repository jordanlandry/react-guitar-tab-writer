import { NoteType } from "../types";

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
    </div>
  );
}
