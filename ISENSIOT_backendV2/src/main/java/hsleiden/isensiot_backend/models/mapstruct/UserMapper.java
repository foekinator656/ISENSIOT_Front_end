package hsleiden.isensiot_backend.models.mapstruct;

import hsleiden.isensiot_backend.models.User;
import hsleiden.isensiot_backend.models.dtos.UserDTO;
import org.mapstruct.CollectionMappingStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        componentModel = "spring",
        uses = {}
)
public interface UserMapper {
    User toEntity(UserDTO userDto);

    UserDTO toDto(User user);
}