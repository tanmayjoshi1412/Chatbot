package com.phc.bankchatbot.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.phc.bankchatbot.Utility.AppConstants;
import com.phc.bankchatbot.Utility.BankChatBotUtility;
import com.phc.bankchatbot.model.DetailCityData;
import com.phc.bankchatbot.model.StateData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
@Slf4j
public class AddressService {

    @Autowired
    private BankChatBotUtility bankChatBotUtility;


    public Set<String> getDistricts() {
        StateData stateData = getStateData();
        return stateData.getDistrictData().keySet();
    }

    public Map<String, List<DetailCityData>> getCity(String district){
        StateData stateData = getStateData();
        return stateData.getDistrictData().get(district);
    }

    public List<DetailCityData> getPosts(String district, String city) {
        StateData stateData = getStateData();
        Map<String, List<DetailCityData>> cities = stateData.getDistrictData().get(district);
        return cities.get(city);
    }

    private StateData getStateData(){
        String json = null;
        StateData stateData = new StateData();
        try {
            json = bankChatBotUtility.getJsonFromFile(AppConstants.RESOURCE_FOLDER,AppConstants.STATE_DATA_JSON);
            stateData = new ObjectMapper().readValue(json, StateData.class);
        } catch (IOException e) {

        }
        return stateData;
    }
}
