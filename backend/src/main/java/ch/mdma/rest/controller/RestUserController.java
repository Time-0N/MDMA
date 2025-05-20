package ch.mdma.rest.controller;

import ch.mdma.data.model.entity.User;
import ch.mdma.mapper.UserMapper;
import ch.mdma.rest.generated.UserApi;
import ch.mdma.security.util.CurrentUserProvider;
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
    public ResponseEntity<ch.mdma.rest.generated.model.User> getCurrentUser() {
        User currentUser = currentUserProvider.getCurrentUser();
        return ResponseEntity.ok(UserMapper.toRest(currentUser));
    }
}
