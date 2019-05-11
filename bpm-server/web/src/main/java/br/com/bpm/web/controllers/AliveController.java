package br.com.bpm.web.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AliveController {

    @RequestMapping("/isAlive")
    public String isAlive() {
        return "Esta vivo -> 82 -BTM!";
    }
}
