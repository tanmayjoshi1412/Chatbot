package com.phc.bankchatbot.model;

import org.springframework.core.io.FileSystemResource;

import java.util.List;
import java.util.Map;

public class Mail {

    private String from;
    private String senderName;
    private String mailTo;
    private String recipientsName;
    private String subject;
    private List<Object> attachments;
    private Map<String, Object> props;
    private String cc;
    private String bcc;
    private String content;
    private FileSystemResource attachment;

    public Mail() {}

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getMailTo() {
        return mailTo;
    }

    public void setMailTo(String mailTo) {
        this.mailTo = mailTo;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public List<Object> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<Object> attachments) {
        this.attachments = attachments;
    }

    public Map<String, Object> getProps() {
        return props;
    }

    public void setProps(Map<String, Object> props) {
        this.props = props;
    }

    public String getCc() {
        return cc;
    }

    public void setCc(String cc) {
        this.cc = cc;
    }

    public String getBcc() {
        return bcc;
    }

    public void setBcc(String bcc) {
        this.bcc = bcc;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getRecipientsName() {
        return recipientsName;
    }

    public void setRecipientsName(String recipientsName) {
        this.recipientsName = recipientsName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public FileSystemResource getAttachment() {
        return attachment;
    }

    public void setAttachment(FileSystemResource attachment) {
        this.attachment = attachment;
    }
}
