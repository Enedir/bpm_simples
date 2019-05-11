package br.com.bpm.persistence;

import br.com.bpm.domain.features.solicitation.Solicitation;
import br.com.bpm.persistence.features.solicitation.SolicitationRepository;
import org.springframework.boot.CommandLineRunner;

import java.util.ArrayList;
import java.util.List;

public class DbSeeder implements CommandLineRunner {

    private SolicitationRepository solicitationRepository;

    public DbSeeder(SolicitationRepository solicitationRepository) {
        this.solicitationRepository = solicitationRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Solicitation solicitation1 = new Solicitation("Gilmar","Pilha", 23.65);
        Solicitation solicitation2 = new Solicitation("Aline","Monitor", 923.15);
        Solicitation solicitation3 = new Solicitation("Paula","Folha A4", 13.60);
        Solicitation solicitation4 = new Solicitation("Mauro","SSD", 332.45);
        Solicitation solicitation5 = new Solicitation("Alex","MAC - PRO", 20000.20);

        List<Solicitation> solicitations = new ArrayList<>();
        solicitations.add(solicitation1);
        solicitations.add(solicitation2);
        solicitations.add(solicitation3);
        solicitations.add(solicitation4);
        solicitations.add(solicitation5);

        this.solicitationRepository.saveAll(solicitations);
    }
}
