package hsleiden.isensiot_backend.models.dtos;

import lombok.Data;

import java.util.List;

@Data
public class UserDTO {
    private String email;
    private String password;
    private List<LocationDto> locations;
}