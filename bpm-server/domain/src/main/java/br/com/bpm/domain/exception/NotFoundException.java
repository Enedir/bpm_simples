package br.com.bpm.domain.exception;

import java.util.UUID;

public class NotFoundException extends BusinessException {

    public NotFoundException(UUID id) {
        super("Não foi possível encontrar o registro:" + id);
    }
}
