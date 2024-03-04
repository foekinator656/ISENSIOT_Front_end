package hsleiden.isensiot_backend.controller;

import hsleiden.isensiot_backend.models.User;
import hsleiden.isensiot_backend.models.dtos.UserDTO;
import hsleiden.isensiot_backend.models.mapstruct.UserMapper;
import hsleiden.isensiot_backend.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping
    public ResponseEntity<List<User>> findAll(
            @RequestHeader("Authorization") String bearerToken
    ) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> find(
            @RequestHeader("Authorization") String bearerToken,
            @PathVariable Long id
    ) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/current")
    public ResponseEntity<UserDTO> getCurrentUser(
            @RequestHeader("Authorization") String bearerToken
    ) {
        return ResponseEntity.ok(userMapper.toDto(userService.getUser(bearerToken)));
    }

    @PostMapping
    public ResponseEntity<User> create(
            @RequestHeader("Authorization") String token,
            @RequestBody UserDTO userDTO
    ) throws Exception {

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

}
