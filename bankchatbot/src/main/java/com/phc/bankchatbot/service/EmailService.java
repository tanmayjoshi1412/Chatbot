package com.phc.bankchatbot.service;

import com.phc.bankchatbot.model.Mail;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;


    public void sendEmail(Mail mail, String template) throws MessagingException, IOException {
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());

        Context context = new Context();
        context.setVariables(mail.getProps());

        String html = templateEngine.process(template, context);

        if(null != mail.getAttachment())
            helper.addAttachment(mail.getAttachment().getFilename(), mail.getAttachment());
        helper.setTo(InternetAddress.parse(mail.getMailTo()));
        helper.setText(html, true);
        helper.setSubject(mail.getSubject());
        helper.setFrom(mail.getFrom());
        if(StringUtils.isNotBlank(mail.getCc()))
            helper.setCc(InternetAddress.parse(mail.getCc()));
        if(StringUtils.isNotBlank(mail.getBcc()))
            helper.setBcc(InternetAddress.parse(mail.getBcc()));

        emailSender.send(message);
    }
}
