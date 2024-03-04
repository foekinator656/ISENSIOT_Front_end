package hsleiden.isensiot_backend.services;

import hsleiden.isensiot_backend.models.TimeRecording;
import hsleiden.isensiot_backend.models.TimeRecordingWithBatches;
import hsleiden.isensiot_backend.models.dtos.TimeRecordingDTO;
import hsleiden.isensiot_backend.repository.TimeRecordingRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class TimeRecordingService {
    final TimeRecordingRepository timeRecordingRepository;

    public void save(TimeRecordingDTO recordingDTO, Long batchID, int time) {
        TimeRecording recording = TimeRecording.builder()
                .timeRecordingWithBatches(new TimeRecordingWithBatches(batchID, time))
                .temperature(recordingDTO.getTemperature())
                .viscosity(recordingDTO.getViscosity())
                .colour(recordingDTO.getColour())
                .build();

        log.info("Recording that has been made is: {}", recording);
        timeRecordingRepository.save(recording);
    }

    public List<TimeRecording> getAllTimeRecordingsByBatch(long batchID){
        return timeRecordingRepository.findAllByBatchId(batchID);
    }

}
