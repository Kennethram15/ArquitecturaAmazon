package com.arqui.broker.controller;

import com.arqui.broker.models.Log;
import com.arqui.broker.services.logService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/logs")
public class LogController {
    private final logService logService;

    public LogController(logService logService) {
        this.logService = logService;
    }
    @GetMapping("/{id}")
    public Optional<Log> getRoleById(@PathVariable Integer id) {
        return logService.getLogById(id);
    }

    @GetMapping("/all")
    public List<Log> getAllLogs() {
        return logService.findAll();
    }

    @PostMapping("/create")
    public Log createLog(@RequestBody Log log) {
        return logService.createLog(log);
    }
}
