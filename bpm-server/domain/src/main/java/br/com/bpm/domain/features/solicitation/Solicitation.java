package br.com.bpm.domain.features.solicitation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;


@Entity
public class Solicitation {

    @Id
    @GeneratedValue
    private UUID id;
    private String nameApplicant;
    private String itemDescription;
    private Double productValue;

    public Solicitation() { }

    public Solicitation(UUID id, String nameApplicant, String itemDescription, Double productValue) {
        this.id = id;
        this.nameApplicant = nameApplicant;
        this.itemDescription = itemDescription;
        this.productValue = productValue;
    }

    public Solicitation(String nameApplicant, String itemDescription, Double productValue) {
        this.nameApplicant = nameApplicant;
        this.itemDescription = itemDescription;
        this.productValue = productValue;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
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
}

