package hsleiden.isensiot_backend.controller;

import hsleiden.isensiot_backend.models.Batch;
import hsleiden.isensiot_backend.models.TimeRecording;
import hsleiden.isensiot_backend.services.BatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/batch")
public class BatchController {
    private final BatchService batchService;

    @GetMapping("/{frituurId}")
    public List<Batch> getAllBatchesByFrituurId(@PathVariable Long frituurId) {
        return batchService.getBatchesByFrituurId(frituurId);
    }

    @PostMapping("/{frituurId}")
    public long createBatch(@PathVariable Long frituurId) {
        return batchService.createBatch(frituurId);
    }

}
