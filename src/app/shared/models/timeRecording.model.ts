import { User } from "./user.model";
import { Frituur } from "./frituur.model";

export interface TimeRecording {
  temperature: number
  colour: string
  viscosity: number
  timeRecordingWithBatches: timeRecordingWithBatches
}

export interface timeRecordingWithBatches {
  time: number;
  id: number;
}
