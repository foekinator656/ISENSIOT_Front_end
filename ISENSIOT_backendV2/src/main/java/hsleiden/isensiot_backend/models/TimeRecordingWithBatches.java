package hsleiden.isensiot_backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import jakarta.persistence.Embeddable;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class TimeRecordingWithBatches implements Serializable {

    private Long batchId;
    private int time;
}
