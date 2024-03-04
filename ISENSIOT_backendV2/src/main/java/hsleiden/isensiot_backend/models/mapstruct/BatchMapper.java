package hsleiden.isensiot_backend.models.mapstruct;

import hsleiden.isensiot_backend.models.Batch;
import hsleiden.isensiot_backend.models.dtos.BatchDto;
import org.mapstruct.CollectionMappingStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        componentModel = "spring",
        uses = {}
)
public interface BatchMapper {
    Batch toEntity(BatchDto batchDto);

    BatchDto toDto(Batch batch);

    List<BatchDto> toDto(List<Batch> batches);
}
