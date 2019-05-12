package br.com.bpm.application.features.solicitation;

import br.com.bpm.application.features.solicitation.commands.SolicitationCommandDelete;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandRegister;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandUpdate;
import br.com.bpm.domain.exception.NotFoundException;
import br.com.bpm.domain.features.solicitation.Solicitation;

import java.util.List;
import java.util.UUID;

public interface ISolicitationService {

    Long add(SolicitationCommandRegister command);
    Boolean update(SolicitationCommandUpdate command);
    Solicitation get(Long id) throws NotFoundException;
    Iterable<Solicitation> get();
    Boolean delete(SolicitationCommandDelete command);
}
