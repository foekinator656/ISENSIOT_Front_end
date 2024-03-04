package hsleiden.isensiot_backend.models.dtos;

import lombok.Data;

@Data
public class BatchDto {
    private Long id;
    private Long frituurId;
    private int typeFrituur;
}
