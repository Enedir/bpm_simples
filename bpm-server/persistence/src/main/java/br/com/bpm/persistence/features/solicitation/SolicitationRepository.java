package br.com.bpm.persistence.features.solicitation;

import br.com.bpm.domain.features.solicitation.Solicitation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitationRepository  extends JpaRepository<Solicitation, Long> {

}
