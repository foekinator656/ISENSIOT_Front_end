package hsleiden.isensiot_backend.repository;

import hsleiden.isensiot_backend.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
