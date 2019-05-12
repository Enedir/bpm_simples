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
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @NotBlank
    private String nameApplicant;

    @NotBlank
    private String itemDescription;

    private Double productValue;

    private SolicitationApprovedEnum isApproved;

    private String observation;

    public Solicitation() {
    }

    public Solicitation(String nameApplicant, String itemDescription, Double productValue) {
        this.nameApplicant = nameApplicant;
        this.itemDescription = itemDescription;
        this.productValue = productValue;
        this.isApproved = SolicitationApprovedEnum.DEFAULT;
    }

    public Solicitation(String nameApplicant, String itemDescription, Double productValue, SolicitationApprovedEnum isApproved, String observation) {
        this.nameApplicant = nameApplicant;
        this.itemDescription = itemDescription;
        this.productValue = productValue;
        this.isApproved = isApproved;
        this.observation = observation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

