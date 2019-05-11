package br.com.bpm.persistence.features.moviment;

import br.com.bpm.domain.features.moviment.Moviment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MovimentRepository extends JpaRepository<Moviment, UUID> {
}
