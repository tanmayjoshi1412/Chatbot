package com.phc.bankchatbot.service;

import com.phc.bankchatbot.model.Mail;
import com.phc.bankchatbot.records.User;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AutoJobRunner {

    @Autowired
    private EmailService emailService;

    @Value("${spring.mail.username}")
    private String senderEmailId;

    @Value("${mail.sender.name}")
    private String senderName;

    @Value("${mail.addresee.name}")
    private String addreseeName;

    @Value("${mail.recipients}")
    private String mailRecipients;

    @Value("${mail.cc.List}")
    private String mailCcList;

    @Value("${mail.bcc.List}")
    private String mailBccList;

    @Value("${mail.subject}")
    private String mailSubject;

    private static Logger log = LoggerFactory.getLogger(AutoJobRunner.class);

    public void sendMail(String template, User user ) throws Exception {

        log.info("START... Sending email");
        Mail mail = new Mail();
        FileSystemResource file;
        String todaysDate = new SimpleDateFormat("ddMMyyyy").format(new Date());

        mail.setFrom(senderEmailId);
        mail.setMailTo(user.getEmailId());
        mail.setSubject("RJFC BANK Account Open SuccessFully");
        mail.setCc(mailCcList);
        mail.setBcc(mailBccList);

        Map<String, Object> model = new HashMap<>();
        model.put("senderName", "RJFC BANK");
        model.put("addreseeName", user.getFirstName());
        model.put("content", "Account Open SuccessFully");
        mail.setProps(model);

        emailService.sendEmail(mail, template);
        log.info("END... Email sent success");

    }
}
