package io.github.vgmerello.anytone.exception;

import jakarta.servlet.http.HttpServletRequest;
import java.time.Instant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handleValidation(
            MethodArgumentNotValidException exception,
            HttpServletRequest request
    ) {
        ApiErrorResponse response = new ApiErrorResponse(
                Instant.now(),
                "VALIDATION_FAILED",
                "The request contains invalid data.",
                request.getRequestURI()
        );
        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorResponse> handleUnexpected(
            Exception exception,
            HttpServletRequest request
    ) {
        LOGGER.error(
                "Unexpected request failure for {} {}",
                request.getMethod(),
                request.getRequestURI(),
                exception
        );

        ApiErrorResponse response = new ApiErrorResponse(
                Instant.now(),
                "INTERNAL_ERROR",
                "The request could not be completed.",
                request.getRequestURI()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}