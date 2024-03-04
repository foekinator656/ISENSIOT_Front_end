package hsleiden.isensiot_backend.models.dtos;

import lombok.Data;

import java.util.List;

@Data
public class LocationDto {
    private Long id;
    private String name;
    private List<FrituurDto> frituurs;
}
