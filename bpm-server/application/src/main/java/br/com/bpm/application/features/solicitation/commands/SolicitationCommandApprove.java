package br.com.bpm.application.features.solicitation.commands;

import br.com.bpm.domain.features.solicitation.SolicitationApprovedEnum;

public class SolicitationCommandApprove {

    private Integer id;
    private SolicitationApprovedEnum isApproved;
    private String observation;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public SolicitationApprovedEnum getIsApproved() {
        return isApproved;
    }

    public void setIsApproved(SolicitationApprovedEnum isApproved) {
        this.isApproved = isApproved;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }
}
