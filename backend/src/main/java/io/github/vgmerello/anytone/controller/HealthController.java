package io.github.vgmerello.anytone.controller;

import io.github.vgmerello.anytone.dto.HealthResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/health", produces = MediaType.APPLICATION_JSON_VALUE)
public class HealthController {

    @GetMapping
    public HealthResponse getHealth() {
        return new HealthResponse("UP");
    }
}