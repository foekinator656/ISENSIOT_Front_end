package hsleiden.isensiot_backend.controller;

import hsleiden.isensiot_backend.models.dtos.LocationDto;
import hsleiden.isensiot_backend.models.mapstruct.LocationMapper;
import hsleiden.isensiot_backend.services.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/location")
public class LocationController {
    private final LocationService locationService;
    private final LocationMapper locationMapper;

    @GetMapping
    public List<LocationDto> getLocationsByUser() {
        return locationMapper.toDto(locationService.getLocationsByCurrentUser());
    }
}