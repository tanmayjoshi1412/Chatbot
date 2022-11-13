package com.phc.bankchatbot.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
import java.util.Map;

public class StateData {
    private Map<String,  Map<String, List<DetailCityData>>>  districtData;

    public Map<String, Map<String, List<DetailCityData>>> getDistrictData() {
        return districtData;
    }

    public void setDistrictData(Map<String, Map<String, List<DetailCityData>>> districtData) {
        this.districtData = districtData;
    }
}
