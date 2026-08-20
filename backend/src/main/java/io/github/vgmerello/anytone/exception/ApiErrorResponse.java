package io.github.vgmerello.anytone.exception;

import java.time.Instant;

public record ApiErrorResponse(
        Instant timestamp,
        String code,
        String message,
        String path
) {
}