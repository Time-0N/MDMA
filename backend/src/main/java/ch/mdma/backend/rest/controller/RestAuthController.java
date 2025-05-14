package ch.mdma.backend.rest.controller;

import ch.mdma.backend.rest.model.User;
import ch.mdma.backend.rest.model.dto.UserResponse;
import ch.mdma.backend.security.annotation.CurrentUser;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class RestAuthController {

    @GetMapping("/user/me")
    public UserResponse getMe(@CurrentUser User user) {
        return new UserResponse(
                user.getUsername(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName()
        );
    }
}
