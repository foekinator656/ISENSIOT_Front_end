package hsleiden.isensiot_backend.controller;

import hsleiden.isensiot_backend.models.dtos.FrituurDto;
import hsleiden.isensiot_backend.models.mapstruct.FrituurMapper;
import hsleiden.isensiot_backend.services.FrituurService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/frituur")
public class FrituurController {
    private final FrituurMapper frituurMapper;
    private final FrituurService frituurService;

    @GetMapping("/{locationId}")
    public List<FrituurDto> getFrituursByLocationId(@PathVariable Long locationId) {
        return frituurMapper.toDto(frituurService.getFrituursByLocationId(locationId));
    }

    @PostMapping("/{frituurId}")
    public void setFrituurIp(@PathVariable Long frituurId, @RequestBody
                             String string){

        string = string.substring(1, string.length()-1);
        frituurService.setFrituurIp(frituurId, string);
    }

    @GetMapping("/getip/{frituurId}")
    public String getFrituurIp(@PathVariable Long frituurId){
        return this.frituurService.getFrituurIp(frituurId);
    }

}
