Feature: Gmail Compose button presence

  Scenario: Verify if the Compose button is visible
    Given I am on the Gmail inbox page
    Then I should see the "Compose" button
Feature: Gmail Compose button clickability

  Scenario: Verify if the Compose button is clickable
    Given I am on the Gmail inbox page
    When I click on the "Compose" button
    Then a new email draft should open
Feature: Gmail Compose fields presence

  Scenario: Verify all required fields are present
    Given I have opened a new email draft
    Then I should see the "To" field
    And I should see the "Cc" field
    And I should see the "Bcc" field
    And I should see the "Subject" field
    And I should see the email body field
Feature: Gmail Compose email address fields

  Scenario: Verify email addresses can be added to "To," "Cc," and "Bcc" fields
    Given I have opened a new email draft
    When I add an email address to the "To" field
    And I add an email address to the "Cc" field
    And I add an email address to the "Bcc" field
    Then the email addresses should be displayed in their respective fields
Feature: Gmail Compose subject line

  Scenario: Verify subject line entry
    Given I have opened a new email draft
    When I enter a subject line
    Then the subject line should be displayed in the "Subject" field
Feature: Gmail Compose email body

  Scenario: Verify text entry in the email body
    Given I have opened a new email draft
    When I enter text into the email body
    Then the text should be displayed in the email body field
Feature: Gmail Compose file attachment

  Scenario: Verify file attachment from the local system
    Given I have opened a new email draft
    When I attach a file from my local system
    Then the file should be displayed as an attachment in the email draft
Feature: Gmail email sending

  Scenario: Verify email can be sent successfully
    Given I have filled in all required fields in the email draft
    When I click the "Send" button
    Then the email should be sent successfully
    And I should see a confirmation message
Feature: Gmail draft saving and retrieval

  Scenario: Verify drafts can be saved and retrieved later
    Given I have started composing an email
    When I close the email draft without sending
    Then the draft should be saved automatically
    And I should be able to retrieve the draft from the "Drafts" folder
Feature: Gmail font customization

  Scenario: Verify that the font can be changed
    Given I am composing an email
    When I change the font style using the formatting toolbar
    Then the text in the email body should display in the selected font style
Feature: Gmail text alignment

  Scenario: Verify text alignment options
    Given I am composing an email
    When I align the text to the left
    Then the text should be aligned to the left
    When I align the text to the center
    Then the text should be aligned to the center
    When I align the text to the right
    Then the text should be aligned to the right
Feature: Gmail email address validation

  Scenario: Verify that the system prevents the addition of invalid email addresses
    Given I have opened a new email draft
    When I enter an invalid email address in the "To" field
    Then I should see an error message indicating the email address is invalid
Feature: Gmail file attachment restrictions

  Scenario: Verify restriction on unsupported file types
    Given I have opened a new email draft
    When I attempt to attach an unsupported file type
    Then the system should prevent the attachment and display an error message
Feature: Gmail file size restriction

  Scenario: Verify restriction on file attachments that exceed the maximum allowed size
    Given I have opened a new email draft
    When I attempt to attach a file that exceeds the maximum allowed size
    Then the system should prevent the attachment and display an error message
Feature: Gmail recipient limit

  Scenario: Verify system behavior when exceeding the maximum number of recipients
    Given I have opened a new email draft
    When I add more recipients than the maximum allowed by Gmail
    Then the system should display an error message
    And the additional recipients should not be added
Feature: Gmail support for emojis

  Scenario: Verify support for emojis in subject and recipient fields
    Given I have opened a new email draft
    When I add emojis to the subject line
    And I add emojis to the recipient fields
    Then the emojis should be displayed correctly in both the subject and recipient fields
Feature: Gmail draft saving under connectivity issues

  Scenario: Verify draft saving during network issues or system failures
    Given I am composing an email
    When there is a network connectivity issue or system failure
    Then the draft should be saved locally or retried once the connection is restored
