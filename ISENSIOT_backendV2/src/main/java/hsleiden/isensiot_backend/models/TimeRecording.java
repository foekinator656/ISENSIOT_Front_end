package hsleiden.isensiot_backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "time_recordings")
public class TimeRecording {
    @EmbeddedId
    private TimeRecordingWithBatches timeRecordingWithBatches;
    private Float temperature;
    private String colour;
    private Float viscosity;
}
