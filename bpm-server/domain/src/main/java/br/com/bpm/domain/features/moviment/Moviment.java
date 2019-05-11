package br.com.bpm.domain.features.moviment;

import br.com.bpm.domain.features.solicitation.Solicitation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Moviment {

    @Id
    @GeneratedValue
    private UUID id;
    private Boolean isApproved;
    private String observation;
    private Solicitation solicitation;

    public Moviment() {
    }

    public Moviment(UUID id, Boolean isApproved, String observation, Solicitation solicitation) {
        this.id = id;
        this.isApproved = isApproved;
        this.observation = observation;
        this.solicitation = solicitation;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Boolean getApproved() {
        return isApproved;
    }

    public void setApproved(Boolean approved) {
        isApproved = approved;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public Solicitation getSolicitation() {
        return solicitation;
    }

    public void setSolicitation(Solicitation solicitation) {
        this.solicitation = solicitation;
    }
}
