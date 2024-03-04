package hsleiden.isensiot_backend.services;

import hsleiden.isensiot_backend.models.Location;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class LocationService {
    private final UserService userService;

    public List<Location> getLocationsByCurrentUser() {
        return userService.getCurrentUser().getLocations();
    }
}
