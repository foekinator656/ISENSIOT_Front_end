package hsleiden.isensiot_backend.seeders;

import hsleiden.isensiot_backend.models.Frituur;
import hsleiden.isensiot_backend.models.Location;
import hsleiden.isensiot_backend.repository.FrituurRepository;
import hsleiden.isensiot_backend.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@Order(3)
@RequiredArgsConstructor
public class FrituurSeeder implements CommandLineRunner {
    private final FrituurRepository frituurRepository;
    private final LocationRepository locationRepository;

    private void createFrituur(int oilVolume, int panCount, int panVolume, Location location) {
        Frituur frituur = Frituur.builder()
                .oilVolume(oilVolume)
                .panCount(panCount)
                .panVolume(panVolume)
                .location(location)
                .build();

        frituurRepository.save(frituur);
    }

    private void createMultipleFrituursForLocation(Location location) {
        int oilVolume = 10;
        int panCount = 2;
        int panVolume = 4;

        if (location.getFrituurs().size() < 5) {
            for (int i = 1; i < 3; i++) {
                createFrituur(oilVolume * i, panCount * i, panVolume * i, location);
            }
        }
    }

    @Override
    public void run(String... args) {
        log.info("Starting with creating frituurs for locations.");

        locationRepository.findAll().forEach(location -> {
            if (location.getFrituurs().isEmpty() || location.getFrituurs().size() < 2) {
                createMultipleFrituursForLocation(location);
            }
        });

        log.info("Frituurs have been created.");
    }
}
