import { Tuning } from "../types";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function getNoteName(tuning: Tuning, string: number, fret: number) {
  const { notes: tuningNotes } = tuning;

  // Ensure the string number is within the range of the tuning
  if (string < 1 || string > tuning.stringCount) {
    throw new Error("Invalid string number.");
  }

  // Get the open string note (including octave)
  const openStringNote = tuningNotes[string - 1];
  const [openNote, openOctave] = parseNoteAndOctave(openStringNote);

  // Find the index of the open string note within the notes array
  const openNoteIndex = notes.indexOf(openNote);

  // Calculate the total index based on the fret
  const noteIndex = openNoteIndex + fret;
  const noteName = notes[noteIndex % notes.length];

  // Calculate the octave
  const octaveOffset = Math.floor((openNoteIndex + fret) / notes.length);
  const noteOctave = openOctave + octaveOffset;

  return `${noteName}${noteOctave}`;
}

function parseNoteAndOctave(note: string): [string, number] {
  const match = note.match(/^([A-G]#?)(\d)$/);
  if (!match) {
    throw new Error("Invalid note format.");
  }
  return [match[1], parseInt(match[2], 10)];
}
