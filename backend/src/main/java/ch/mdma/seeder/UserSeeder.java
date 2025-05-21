package ch.mdma.seeder;

import ch.mdma.rest.generated.model.UserRegistrationRequest;
import ch.mdma.rest.generated.model.UserRegistrationResponse;
import ch.mdma.service.KeycloakService;
import ch.mdma.service.UserService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
@RequiredArgsConstructor
public class UserSeeder {

    private final UserService userService;
    private final KeycloakService keycloakService;

    @PostConstruct
    public void resetAndSeed() {
        // 🔥 STEP 1: Delete all users via UserService
        userService.findAllUsers().forEach(user -> {
            try {
                userService.deleteUser(user.getId()); // ✅ handles Keycloak + DB + cache
                System.out.println("🗑️ Deleted user: " + user.getUsername());
            } catch (Exception e) {
                System.out.println("⚠️ Failed to delete user '" + user.getUsername() + "': " + e.getMessage());
            }
        });

        System.out.println("🧹 All users deleted.");

        // 🚀 STEP 2: Register 3 test users
        createTestUser("testuser", "testuser@example.com", "password123", "Test", "UserOne");
    }

    private void createTestUser(String username, String email, String password, String firstName, String lastName) {
        try {
            UserRegistrationRequest request = new UserRegistrationRequest(
                    username, email, password, firstName, lastName
            );
            UserRegistrationResponse response = userService.registerUser(request);
            System.out.println("✅ Created user: " + response.getUsername());
        } catch (Exception e) {
            System.out.println("❌ Failed to create user '" + username + "': " + e.getMessage());
        }
    }
}

