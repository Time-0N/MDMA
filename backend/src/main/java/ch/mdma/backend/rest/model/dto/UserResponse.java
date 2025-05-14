package ch.mdma.backend.rest.model.dto;

public record UserResponse(
        String username,
        String email,
        String firstName,
        String lastName
) {
}
