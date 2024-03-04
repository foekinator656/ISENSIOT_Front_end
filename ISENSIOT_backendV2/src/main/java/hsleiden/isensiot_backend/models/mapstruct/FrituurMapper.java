package hsleiden.isensiot_backend.models.mapstruct;

import hsleiden.isensiot_backend.models.Frituur;
import hsleiden.isensiot_backend.models.dtos.FrituurDto;
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
public interface FrituurMapper {
    Frituur toEntity(FrituurDto frituurDto);

    FrituurDto toDto(Frituur frituur);

    List<FrituurDto> toDto(List<Frituur> frituurs);
}
