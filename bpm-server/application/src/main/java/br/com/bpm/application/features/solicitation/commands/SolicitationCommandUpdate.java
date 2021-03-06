package br.com.bpm.application.features.solicitation.commands;

import br.com.bpm.domain.features.solicitation.SolicitationApprovedEnum;

public class SolicitationCommandUpdate {

    private Integer id;
    private String nameApplicant;
    private String itemDescription;
    private Double productValue;
    private SolicitationApprovedEnum isApproved;

    private String observation;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameApplicant() {
        return nameApplicant;
    }

    public void setNameApplicant(String nameApplicant) {
        this.nameApplicant = nameApplicant;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public Double getProductValue() {
        return productValue;
    }

    public void setProductValue(Double productValue) {
        this.productValue = productValue;
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
