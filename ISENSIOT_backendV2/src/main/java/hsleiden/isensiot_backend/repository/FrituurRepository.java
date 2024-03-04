package hsleiden.isensiot_backend.repository;

import hsleiden.isensiot_backend.models.Frituur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FrituurRepository extends JpaRepository<Frituur,Long> {

    List<Frituur> findAllByLocationId(Long id);
}
