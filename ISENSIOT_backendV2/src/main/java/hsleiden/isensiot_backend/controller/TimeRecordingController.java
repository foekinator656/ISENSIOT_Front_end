package hsleiden.isensiot_backend.controller;

import hsleiden.isensiot_backend.models.TimeRecording;
import hsleiden.isensiot_backend.models.dtos.TimeRecordingDTO;
import hsleiden.isensiot_backend.services.TimeRecordingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/timerecording")
public class TimeRecordingController {
    final TimeRecordingService timeRecordingService;

    @PostMapping("/{batchId}/{time}")
    public void postTimeRecording(
            @PathVariable Long batchId,
            @PathVariable int time,
            @RequestBody TimeRecordingDTO timeRecordingDTO
    ) {
        log.info("hallo");
        System.out.println("hallow");
        timeRecordingService.save(timeRecordingDTO, batchId, time);
    }

    @GetMapping("/{batchId}")
    public List<TimeRecording> getTimeRecordingsByBatch(
            @PathVariable Long batchId
    ){
        return timeRecordingService.getAllTimeRecordingsByBatch(batchId);
    }
}
