package hsleiden.isensiot_backend.models.mapstruct;

import hsleiden.isensiot_backend.models.Location;
import hsleiden.isensiot_backend.models.dtos.LocationDto;
import org.mapstruct.CollectionMappingStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        componentModel = "spring",
        uses = {
                FrituurMapper.class
        }
)
public interface LocationMapper {
    Location toEntity(LocationDto locationDto);

    LocationDto toDto(Location location);

    List<LocationDto> toDto(List<Location> locations);
}
