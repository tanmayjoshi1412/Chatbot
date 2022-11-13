package com.phc.bankchatbot.Utility;

import org.springframework.stereotype.Service;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankChatBotUtility {


    public String getJsonFromFile(String folder, String fileName) throws IOException {

        try {
            File file = getAllFilesFromResource(folder,fileName);
            if(null != file){
                return  new String(Files.readAllBytes(file.toPath()));
            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return "";
    }

    private File getAllFilesFromResource(String folder, String fileName)
            throws URISyntaxException, IOException {

        ClassLoader classLoader = getClass().getClassLoader();

        URL resource = classLoader.getResource(folder);

        List<File> collect = Files.walk(Paths.get(resource.toURI()))
                .filter(Files::isRegularFile)
                .map(x -> x.toFile())
                .collect(Collectors.toList());

        return collect.stream().filter(f -> f.getName().equalsIgnoreCase(fileName)).findFirst().orElse(null);

    }
}
