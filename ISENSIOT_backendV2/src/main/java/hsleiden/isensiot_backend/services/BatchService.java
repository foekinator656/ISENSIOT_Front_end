package hsleiden.isensiot_backend.services;

import hsleiden.isensiot_backend.models.Batch;
import hsleiden.isensiot_backend.repository.BatchRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BatchService {
    private final BatchRepository batchRepository;

    public List<Batch> getBatchesByFrituurId(Long frituurId) {
        return batchRepository.findAllByFrituurId(frituurId);
    }

    public long createBatch(Long frituurdId){
        Batch batch = Batch.builder().frituurId(frituurdId).build();
        batchRepository.save(batch);
        return batch.getId();
    }
}
