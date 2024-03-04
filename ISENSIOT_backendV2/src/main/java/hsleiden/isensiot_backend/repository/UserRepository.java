package hsleiden.isensiot_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import hsleiden.isensiot_backend.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
