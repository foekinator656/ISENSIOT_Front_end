package hsleiden.isensiot_backend.repository;

import hsleiden.isensiot_backend.models.TimeRecording;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimeRecordingRepository extends JpaRepository<TimeRecording,Long> {
    @Query(value = "select * from time_recordings where batch_id = :id",
            nativeQuery = true)
    List<TimeRecording> findAllByBatchId(Long id);
}
