package br.com.bpm.application.features.solicitation;

import br.com.bpm.application.features.solicitation.commands.SolicitationCommandDelete;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandRegister;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandUpdate;
import br.com.bpm.domain.exception.NotFoundException;
import br.com.bpm.domain.features.solicitation.Solicitation;
import br.com.bpm.persistence.features.solicitation.SolicitationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.UUID;

@Component
public class SolicitationService implements ISolicitationService {

    private SolicitationRepository repository;
    private ModelMapper mapper;

    public SolicitationService(SolicitationRepository repository) {
        this.repository = repository;
    }

    @Override
    public UUID add(SolicitationCommandRegister command) {

        mapper = new ModelMapper();

        Solicitation entity = mapper.map(command, Solicitation.class);
        Solicitation newEntity = repository.save(entity);

        return newEntity.getId();
    }

    @Override
    public Boolean update(SolicitationCommandUpdate command) {

        mapper = new ModelMapper();

        Solicitation entity = mapper.map(command, Solicitation.class);
        Solicitation updatedEntity = repository.save(entity);

        return updatedEntity != null;
    }

    @Override
    public Solicitation get(UUID id)throws NotFoundException{

        Optional<Solicitation> entity = repository.findById(id);

        return  entity.orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public Iterable<Solicitation> get() {

        return repository.findAll();
    }


    @Override
    public Boolean delete(SolicitationCommandDelete command) {

        Optional<Solicitation> entity = repository.findById(command.id);

        try {
            entity.orElseThrow(() -> new NotFoundException(command.id));
            repository.delete(entity.get());
            return true;

        } catch (NotFoundException e) {
            e.printStackTrace();
        }

        return false;
    }
}
