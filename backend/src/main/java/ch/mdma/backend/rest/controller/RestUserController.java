package ch.mdma.backend.rest.controller;

import ch.mdma.backend.data.model.entity.User;
import ch.mdma.backend.mapper.UserMapper;
import ch.mdma.backend.rest.api.UserApi;
import ch.mdma.backend.security.util.CurrentUserProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class RestUserController implements UserApi {

    private final CurrentUserProvider currentUserProvider;

    @Override
    @GetMapping("/me")
    public ResponseEntity<ch.mdma.backend.rest.model.User> getCurrentUser() {
        User currentUser = currentUserProvider.getCurrentUser();
        return ResponseEntity.ok(UserMapper.toRest(currentUser));
    }
}
