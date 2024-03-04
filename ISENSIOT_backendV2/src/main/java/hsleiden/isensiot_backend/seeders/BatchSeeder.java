package hsleiden.isensiot_backend.seeders;

import hsleiden.isensiot_backend.models.Batch;
import hsleiden.isensiot_backend.models.Frituur;
import hsleiden.isensiot_backend.models.TimeRecording;
import hsleiden.isensiot_backend.models.TimeRecordingWithBatches;
import hsleiden.isensiot_backend.repository.BatchRepository;
import hsleiden.isensiot_backend.repository.FrituurRepository;
import hsleiden.isensiot_backend.repository.TimeRecordingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@Order(4)
@RequiredArgsConstructor
public class BatchSeeder implements CommandLineRunner {
    private final FrituurRepository frituurRepository;
    private final BatchRepository batchRepository;


    private void createBatch(Long frituur_id) {
        Batch batch = Batch.builder().frituurId(frituur_id).build();
        batchRepository.save(batch);
    }

    private void createMultipleBatchForLocation(Frituur frituur) {
        for (int i = 1; i < 4; i++) {
            createBatch(frituur.getId());
        }
    }

    @Override
    public void run(String... args) {
        log.info("Starting with setting up multiple Batches.");
        frituurRepository.findAll().forEach(frituur -> {
            if (batchRepository.findAllByFrituurId(frituur.getId()).isEmpty() || batchRepository.findAllByFrituurId(frituur.getId()).size() < 3) {
                createMultipleBatchForLocation(frituur);
            }
        });
        log.info("Multiple Batches have been set.");
    }
}
