package hsleiden.isensiot_backend.seeders;

import hsleiden.isensiot_backend.models.Location;
import hsleiden.isensiot_backend.models.User;
import hsleiden.isensiot_backend.repository.LocationRepository;
import hsleiden.isensiot_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@Order(2)
@RequiredArgsConstructor
public class LocationSeeder implements CommandLineRunner {
    private final UserRepository userRepository;
    private final LocationRepository locationRepository;

    private void createLocation(String name) {
        Optional<Location> existingLocation = locationRepository.findByName(name);

        if (existingLocation.isPresent()) {
            return;
        }

        Location location = Location.builder()
                .name(name)
                .build();
        locationRepository.save(location);
    }

    private void createLocations() {
        for (int i = 0; i < 3; i++) {
            createLocation("test" + i);
        }
    }

    private void setMultipleUsersForLocations(User user) {
        log.info("Starting with setting multiple users for locations.");

        locationRepository.findAll().forEach(location -> {
            location.getUsers().add(user);
            locationRepository.save(location);
        });

        log.info("Multiple locations have been set.");
    }

    @Override
    public void run(String... args) {
        createLocation("patatzaak nemal");
        createLocations();
        userRepository.findAll().forEach(this::setMultipleUsersForLocations);
    }
}
