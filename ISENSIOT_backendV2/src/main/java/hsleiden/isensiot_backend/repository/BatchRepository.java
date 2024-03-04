package hsleiden.isensiot_backend.repository;

import hsleiden.isensiot_backend.models.Batch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BatchRepository extends JpaRepository<Batch,Long> {

    List<Batch> findAllByFrituurId(Long id);
}
