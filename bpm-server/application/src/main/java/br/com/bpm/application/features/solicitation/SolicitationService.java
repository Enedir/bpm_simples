package br.com.bpm.application.features.solicitation;

import br.com.bpm.application.features.solicitation.commands.SolicitationCommandDelete;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandRegister;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandUpdate;
import br.com.bpm.domain.exception.NotFoundException;
import br.com.bpm.domain.features.solicitation.Solicitation;
import br.com.bpm.infrastructure.MapperUtils;
import br.com.bpm.persistence.features.solicitation.SolicitationRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class SolicitationService implements ISolicitationService {

    private SolicitationRepository repository;

    public SolicitationService(SolicitationRepository repository) {
        this.repository = repository;
    }

    @Override
    public Integer add(SolicitationCommandRegister command) {

        Solicitation entity = MapperUtils.map(command, Solicitation.class);
        Solicitation newEntity = repository.save(entity);

        return newEntity.getId();
    }

    @Override
    public Boolean update(SolicitationCommandUpdate command) {

        Solicitation entity = MapperUtils.map(command, Solicitation.class);
        Solicitation updatedEntity = repository.save(entity);

        return updatedEntity != null;
    }

    @Override
    public Solicitation get(Integer id)throws NotFoundException{

        Optional<Solicitation> entity = repository.findById(id);

        return  entity.orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public Iterable<Solicitation> get() {

        return repository.findAll();
    }


    @Override
    public Boolean delete(SolicitationCommandDelete command) {

        Optional<Solicitation> entity = repository.findById(command.getId());

        try {
            entity.orElseThrow(() -> new NotFoundException(command.getId()));
            repository.delete(entity.get());
            return true;

        } catch (NotFoundException e) {
            e.printStackTrace();
        }

        return false;
    }
}
