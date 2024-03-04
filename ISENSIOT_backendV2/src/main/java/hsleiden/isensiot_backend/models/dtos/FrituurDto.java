package hsleiden.isensiot_backend.models.dtos;

import lombok.Data;

@Data
public class FrituurDto {
    private Long id;
    private int oilVolume;
    private int panCount;
    private int panVolume;
}
