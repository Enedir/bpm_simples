package br.com.bpm.domain.features.solicitation;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "solicitations")
@EntityListeners(AuditingEntityListener.class)
public class Solicitation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idSolicitation", updatable = false, nullable = false)
    private int id;

    @NotBlank
    private String nameApplicant;

    @NotBlank
    private String itemDescription;

    private double productValue;

    @Enumerated(EnumType.STRING)
    private SolicitationApprovedEnum isApproved;

    private String observation;

    public Solicitation() {
        this.isApproved = SolicitationApprovedEnum.ESPERA;
    }

    public Solicitation(String nameApplicant, String itemDescription, double productValue) {
        this.nameApplicant = nameApplicant;
        this.itemDescription = itemDescription;
        this.productValue = productValue;
        this.isApproved = SolicitationApprovedEnum.ESPERA;
    }

    public Solicitation(String nameApplicant, String itemDescription, double productValue, SolicitationApprovedEnum isApproved, String observation) {
        this.nameApplicant = nameApplicant;
        this.itemDescription = itemDescription;
        this.productValue = productValue;
        this.isApproved = isApproved;
        this.observation = observation;
    }

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

    public void approveValidate() throws SocilitationApproveException {

        if(isApproved == SolicitationApprovedEnum.REPROVADO && observation.isEmpty())
            throw new SocilitationApproveException();
    }
}

