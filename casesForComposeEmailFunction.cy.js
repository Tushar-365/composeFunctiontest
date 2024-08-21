/// <reference types="cypress" />

describe('Gmail Compose Feature', () => {
  
    beforeEach(() => {
      // Assume the user is logged in and the Gmail interface is loaded
      cy.visit('https://mail.google.com/');
    });
  //TC-01 Verify if the Compose button is present
    it('Verify if the Compose button is present', () => {
      cy.get('.T-I.T-I-KE.L3').should('be.visible').and('contain', 'Compose');
    });
  //TC-02 Verify if the Compose button is clickable
    it('Verify if the Compose button is clickable', () => {
      cy.get('.T-I.T-I-KE.L3').should('be.enabled').click();
    });
  //TC-03 Verify if all fields are present
    it('Verify if all fields are present', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="to"]').should('be.visible');
      cy.get('[name="cc"]').should('be.visible');
      cy.get('[name="bcc"]').should('be.visible');
      cy.get('[name="subjectbox"]').should('be.visible');
      cy.get('.editable').should('be.visible'); // Email body
    });
  //TC-04 Verify that Email addresses can be added to the "To," "Cc," and "Bcc" fields
    it('Verify that Email addresses can be added to the "To," "Cc," and "Bcc" fields', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="to"]').type('recipient1@example.com');
      cy.get('[name="cc"]').type('recipient2@example.com');
      cy.get('[name="bcc"]').type('recipient3@example.com');
    });
  //TC-05 Verify that a subject line can be entered successfully
    it('Verify that a subject line can be entered successfully', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="subjectbox"]').type('Incubytet');
    });
  //TC-06 Verify that text can be entered into the email body
    it('Verify that text can be entered into the email body', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('.editable').type('QA test for Incubyte');
    });
  //TC-07 Verify that files can be attached from the local system
    it('Verify that files can be attached from the local system', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('input[type="file"]').attachFile('path/to/file.jpg');
      cy.get('.a1.aaA').should('contain', 'file.jpg');
    });
  //TC-08 Verify that the email can be sent successfully
    it('Verify that the email can be sent successfully', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="to"]').type('recipient@example.com');
      cy.get('.editable').type('Test email body');
      cy.get('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3').click(); // Send button
      cy.get('.vh').should('contain', 'Message sent.');
    });
  //TC-09 Verify that drafts can be saved and retrieved later
    it('Verify that drafts can be saved and retrieved later', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="to"]').type('recipient@example.com');
      cy.get('.editable').type('Draft email body');
      cy.get('.og.T-I-J3').click(); // Close button, saves as draft
      cy.get('.aHS-bnq').click(); // Drafts folder
      cy.get('.bog').contains('Draft email body').click();
    });
  //TC-10 Verify that the font can be changed
    it('Verify that the font can be changed', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('.aT2').click(); // Font button
      cy.get('.aT2 font').first().click(); // Change font
    });
  //TC-11 Verify that text can be aligned left, center, and right
    it('Verify that text can be aligned left, center, and right', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('.aT4[command="justifyLeft"]').click(); // Align left
      cy.get('.aT4[command="justifyCenter"]').click(); // Align center
      cy.get('.aT4[command="justifyRight"]').click(); // Align right
    });
  //TC-12 Verify that the system prevents the addition of invalid email addresses
    it('Verify that the system prevents the addition of invalid email addresses', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="to"]').type('invalid-email').blur();
      cy.get('.eo').should('be.visible').and('contain', 'Please enter a valid email address.');
    });
  //TC-13 Verify that the system restricts the attachment of unsupported file types
    it('Verify that the system restricts the attachment of unsupported file types', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('input[type="file"]').attachFile('path/to/unsupported_file.exe');
      cy.get('.Kj-JD-Jz').should('contain', 'Blocked for security reasons.');
    });
  //TC-14 Verify that the system prevents the attachment of files that exceed the maximum allowed size
    it('Verify that the system prevents the attachment of files that exceed the maximum allowed size', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('input[type="file"]').attachFile('path/to/large_file.zip');
      cy.get('.Kj-JD-Jz').should('contain', 'exceeds the 25MB attachment limit');
    });
  //TC-15 Verify with more recipients than the maximum allowed by Gmail
    it('Verify with more recipients than the maximum allowed by Gmail', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      for (let i = 0; i < 100; i++) {
        cy.get('[name="to"]').type(`recipient${i}@example.com,`);
      }
      cy.get('.eo').should('be.visible').and('contain', 'You have exceeded the maximum number of recipients.');
    });
  //TC-16 Verify with emojis in the subject line or recipient fields
    it('Verify with emojis in the subject line or recipient fields', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="subjectbox"]').type('😊🎉 Test Subject');
      cy.get('[name="to"]').type('recipient😊@example.com');
    });
  //TC-17 Verify after making network connectivity issues or system failures during the draft saving process
    it('Verify after making network connectivity issues or system failures during the draft saving process', () => {
      cy.get('.T-I.T-I-KE.L3').click();
      cy.get('[name="to"]').type('recipient@example.com');
      cy.get('.editable').type('Draft with network issue');
      cy.intercept('POST', '/saveDraft', { forceNetworkError: true });
      cy.get('.og.T-I-J3').click(); // Attempt to save draft
      cy.get('.Kj-JD-Jz').should('contain', 'Failed to save draft due to network issues.');
    });
  
  });
  