package ch.mdma.rest.generated.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * UserRegistrationRequest
 */
@lombok.Data @lombok.AllArgsConstructor @lombok.Builder

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-05-21T11:05:49.779422644+02:00[Europe/Zurich]", comments = "Generator version: 7.7.0")
public class UserRegistrationRequest {

  private String username;

  private String email;

  private String password;

  private String firstName;

  private String lastName;

  public UserRegistrationRequest() {
    super();
  }

}

