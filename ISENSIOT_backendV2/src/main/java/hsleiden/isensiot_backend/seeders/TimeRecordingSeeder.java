package hsleiden.isensiot_backend.seeders;

import hsleiden.isensiot_backend.models.Batch;
import hsleiden.isensiot_backend.models.TimeRecording;
import hsleiden.isensiot_backend.models.TimeRecordingWithBatches;
import hsleiden.isensiot_backend.repository.BatchRepository;
import hsleiden.isensiot_backend.repository.TimeRecordingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@Order(5)
@RequiredArgsConstructor
public class TimeRecordingSeeder implements CommandLineRunner {
    private final BatchRepository batchRepository;
    private final TimeRecordingRepository timeRecordingRepository;


    private void createTimeRecording(float temperatuur, float viscosity, String colour, int time, Long batch_id) {
        TimeRecording timeRecording = TimeRecording.builder()
                .timeRecordingWithBatches(new TimeRecordingWithBatches(batch_id,time))
                .temperature(temperatuur)
                .viscosity(viscosity)
                .colour(colour)
                .build();

        timeRecordingRepository.save(timeRecording);
    }

    private void createMultipleTimeRecordingForBatch(Batch batch) {
        for (int i = 1; i < 6; i++) {
            createTimeRecording(10 * i, 10 * i, "#ebb403", 10*i, batch.getId());
        }
    }

    @Override
    public void run(String... args) {
        log.info("Starting with setting up multiple TimeRecordings.");
        batchRepository.findAll().forEach(batch -> {
            if (timeRecordingRepository.findAllByBatchId(batch.getId()).isEmpty() || timeRecordingRepository.findAllByBatchId(batch.getId()).size() < 5) {
                createMultipleTimeRecordingForBatch(batch);
            }
        });
        log.info("Multiple TimeRecordings have been set.");
    }
}
