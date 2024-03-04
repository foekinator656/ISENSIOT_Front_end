package hsleiden.isensiot_backend.models.dtos;

import lombok.Data;

@Data

public class TimeRecordingDTO {
    private Float temperature;
    private String colour;
    private Float viscosity;
}
