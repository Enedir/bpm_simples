package br.com.bpm.web.model;

import br.com.bpm.domain.features.solicitation.SolicitationApprovedEnum;


public class SolicitationModelView {

    private int id;
    private String nameApplicant;
    private String itemDescription;
    private double productValue;
    private SolicitationApprovedEnum isApproved;
    private String observation;

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public double getProductValue() {
        return productValue;
    }

    public void setProductValue(double productValue) {
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
