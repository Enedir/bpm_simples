package br.com.bpm.domain.features.solicitation;

import br.com.bpm.domain.exception.BusinessException;

public class SocilitationApproveException extends BusinessException {

    public SocilitationApproveException() {
        super("Para reprovar a solicitação é necessario ter uma observação");
    }
}
