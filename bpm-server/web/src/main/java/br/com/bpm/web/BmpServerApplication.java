package br.com.bpm.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableSpringDataWebSupport
@EnableJpaAuditing
@EnableJpaRepositories(basePackages = {"br.com.bpm.persistence"})
@EnableTransactionManagement
@EntityScan(basePackages = {"br.com.bpm.domain"})
@ComponentScan( basePackages = {
        "br.com.bpm.domain",
        "br.com.bpm.persistence",
        "br.com.bpm.application",
        "br.com.bpm.web"})
public class BmpServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BmpServerApplication.class, args);
    }

}
