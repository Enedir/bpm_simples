package br.com.bpm.web.controllers;

import br.com.bpm.application.features.solicitation.ISolicitationService;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandDelete;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandRegister;
import br.com.bpm.application.features.solicitation.commands.SolicitationCommandUpdate;
import br.com.bpm.domain.exception.NotFoundException;
import br.com.bpm.domain.features.solicitation.Solicitation;
import br.com.bpm.infrastructure.MapperUtils;
import br.com.bpm.web.model.SolicitationModelView;
import com.google.common.collect.Lists;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/solicitation")
public class SolicitationController {

    private ISolicitationService service;

    public SolicitationController(ISolicitationService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Integer> add(@RequestBody SolicitationCommandRegister command) {
        try
        {
            Integer id =  service.add(command);
            HttpHeaders responseHeaders = new HttpHeaders();
            return new ResponseEntity<>(id, responseHeaders, HttpStatus.OK);
        }catch (Exception ex)
        {
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping
    public ResponseEntity<Boolean> update(@RequestBody SolicitationCommandUpdate command) {
        try
        {
            service.update(command);
            return  ResponseEntity.ok().build();
        }catch (Exception ex)
        {
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/getall")
    public  ResponseEntity<List<SolicitationModelView>> getAll() {
        try {
            List<Solicitation> entities = Lists.newArrayList(service.get());
            HttpHeaders responseHeaders = new HttpHeaders();
            return new ResponseEntity<>(convertListToView(entities), responseHeaders, HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<SolicitationModelView> getById(@PathVariable(required = true) Integer id) {

        try {
            Solicitation entity =  service.get(id);
            HttpHeaders responseHeaders = new HttpHeaders();
            return new ResponseEntity<>(MapperUtils.map(entity,SolicitationModelView.class), responseHeaders, HttpStatus.OK);
        }catch (NotFoundException ex)
        {
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping
    public ResponseEntity<Boolean> delete(@RequestBody SolicitationCommandDelete command) {

        try{
            service.delete(command);
            return ResponseEntity.ok().build();

        }catch (Exception ex)
        {
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
    
    private  List<SolicitationModelView> convertListToView( List<Solicitation> entities){

        List<SolicitationModelView> modelList = new ArrayList<>();

        for (Solicitation entity: entities) {
            modelList.add(MapperUtils.map(entity,SolicitationModelView.class));
        }

        return modelList;
    }
}
