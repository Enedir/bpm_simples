package br.com.bpm.application.features.solicitation;

import br.com.bpm.application.features.solicitation.commands.SolicitationCommandApprove;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandRegister;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandUpdate;
import br.com.bpm.domain.exception.NotFoundException;
import br.com.bpm.domain.features.solicitation.Solicitation;

public interface ISolicitationService {

    Integer add(SolicitationCommandRegister command);

    Boolean update(SolicitationCommandUpdate command);

    Boolean approve(SolicitationCommandApprove command);

    Solicitation get(Integer id) throws NotFoundException;

    Iterable<Solicitation> get();

    Boolean delete(Integer id);
}
