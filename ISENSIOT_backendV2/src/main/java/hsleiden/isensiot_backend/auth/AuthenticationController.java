package hsleiden.isensiot_backend.auth;

import hsleiden.isensiot_backend.models.dtos.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @CrossOrigin
    @PostMapping("/register")
    public void register(@RequestBody UserDTO userDTO) {
        authenticationService.register(userDTO);
    }

    @CrossOrigin
    @RequestMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody AuthenticationRequest authenticationRequest
    ) throws Exception {
        System.out.println(authenticationRequest);
        return ResponseEntity.ok(authenticationService.login(authenticationRequest));
    }
}
