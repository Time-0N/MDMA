package ch.mdma.service;

import ch.mdma.data.model.entity.User;
import ch.mdma.rest.generated.model.UserRegistrationRequest;
import ch.mdma.rest.generated.model.UserRegistrationResponse;
import ch.mdma.rest.generated.model.UserUpdateRequest;
import ch.mdma.rest.generated.model.UserUpdateResponse;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserService {
    UserUpdateResponse updateUser(User user, UserUpdateRequest request);
    UserRegistrationResponse registerUser(UserRegistrationRequest request);
    void deleteUser(UUID uuid);
    Optional<User> findByUsername(String username);
    User findById(UUID id);
    List<User> findAllUsers();
}
