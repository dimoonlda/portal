package ua.kiev.dimoon.portal.back.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import ua.kiev.dimoon.portal.back.model.domain.User;

import java.time.LocalDate;

/**
 * Created by lutay.d on 25.01.2017.
 */
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UserProfile {
    private Long id;
    private String email;
    private String login;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;

    public UserProfile() {
    }

    public UserProfile(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.login = user.getLogin();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.dateOfBirth = user.getDateOfBirth();
    }

    public Long getId() {
        return id;
    }

    public UserProfile setId(Long id) {
        this.id = id;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserProfile setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getLogin() {
        return login;
    }

    public UserProfile setLogin(String login) {
        this.login = login;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public UserProfile setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public UserProfile setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public UserProfile setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", login='" + login + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                '}';
    }
}
