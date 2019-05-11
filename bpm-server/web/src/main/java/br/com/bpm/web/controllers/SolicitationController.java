package br.com.bpm.web.controllers;

import br.com.bpm.application.features.solicitation.ISolicitationService;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandDelete;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandRegister;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandUpdate;
import br.com.bpm.domain.exception.NotFoundException;
import br.com.bpm.domain.features.solicitation.Solicitation;
import br.com.bpm.web.model.SolicitationModelView;
import com.google.common.collect.Lists;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/solicitation")
public class SolicitationController {

    private ISolicitationService service;
    private ModelMapper mapper;

    public SolicitationController(ISolicitationService service) {
        this.service = service;
    }

    @GetMapping
    public List<Solicitation> getAll() {
        return Lists.newArrayList(service.get());
    }
    @PostMapping
    public UUID add(@RequestBody SolicitationCommandRegister command) {

        return service.add(command);
    }

    @PutMapping
    public Boolean update(@RequestBody SolicitationCommandUpdate command) {

        return service.update(command);
    }

    @GetMapping("/{id}")
    public SolicitationModelView getById(@PathVariable(required = true) UUID id) {

        try {
            Solicitation entity =  service.get(id);

            mapper = new ModelMapper();

            return mapper.map(entity, SolicitationModelView.class);

        }catch (NotFoundException ex)
        {
            ex.printStackTrace();
        }

        return null;
    }
    @DeleteMapping
    public Boolean delete(@RequestBody SolicitationCommandDelete command) {

            return service.delete(command);
    }
}
