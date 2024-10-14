import { STANDARD_TUNING } from "../constants";
import { SongType } from "../types";

export const song: SongType = {
  name: "G Chord",
  instruments: [
    {
      tuning: STANDARD_TUNING,
      name: "Guitar 1",
      volume: 1,
      measures: [
        {
          timeSignature: { numerator: 4, denominator: 4 },
          tempo: 120,
          beats: [
            [
              {
                string: 1,
                fret: 3,
                duration: 1,
                isHammerOn: false,
                isHarmonic: false,
                isPullOff: false,
              }, 
              {
                string: 2,
                fret: 2,
                duration: 1,
                isHammerOn: false,
                isHarmonic: false,
                isPullOff: false,
              }, 
            ],
            [
              {
                string: 3,
                fret: 0,
                duration: 1,
                isHammerOn: false,
                isHarmonic: false,
                isPullOff: false,
              },
            ],
            [
              {
                string: 4,
                fret: 0,
                duration: 1,
                isHammerOn: false,
                isHarmonic: false,
                isPullOff: false,
              },
              {
                string: 5,
                fret: 1,
                duration: 0.5,
                isHammerOn: false,
                isHarmonic: false,
                isPullOff: false,
              },
            ],
            [
              {
                string: 6,
                fret: 0,
                duration: 1,
                isHammerOn: false,
                isHarmonic: false,
                isPullOff: false,
              },
            ],
          ],
        },
      ],
    },
  ],
};
