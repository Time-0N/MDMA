package ch.mdma.service;

import ch.mdma.rest.generated.model.AuthenticationRequest;
import ch.mdma.rest.generated.model.TokenResponse;
import ch.mdma.rest.generated.model.UserRegistrationRequest;
import ch.mdma.rest.generated.model.UserUpdateRequest;

public interface KeycloakService {
    String createKeycloakUser(UserRegistrationRequest request);
    TokenResponse authenticateUser(AuthenticationRequest request);
    void deleteKeycloakUser(String keycloakUserId);
    void updateKeycloakUser(String keycloakUserId, UserUpdateRequest request);
}
