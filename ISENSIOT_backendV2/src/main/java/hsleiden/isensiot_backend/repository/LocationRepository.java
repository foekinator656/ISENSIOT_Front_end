package hsleiden.isensiot_backend.repository;

import hsleiden.isensiot_backend.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LocationRepository extends JpaRepository<Location,Long> {
    Optional<Location> findByName(String anme);
}
