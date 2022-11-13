package com.phc.bankchatbot.controller;

import com.phc.bankchatbot.model.DetailCityData;
import com.phc.bankchatbot.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("getDistricts")
    public Set<String> getDistricts(){
        return addressService.getDistricts();
    }

    @GetMapping("getCity")
    public Map<String, List<DetailCityData>> getCity(String district){
        return addressService.getCity(district);
    }

    @GetMapping("getPosts")
    public List<DetailCityData> getPosts(String district, String city){
        return addressService.getPosts(district, city);
    }

}
