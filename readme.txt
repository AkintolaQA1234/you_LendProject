# README

Increase the number in the email address each time you want to run the test (can be found here integration/common/common.js)

Areas of improvement and bugs
1. Password criteria should be displayed if incorrect password is used. 
2. A message prompt should be displayed when an account is created successfully to inform the user.
3. A message prompt (i.e "email address is already registered") should be displayed when duplicate email address or incorrect password is used to create a new account. 
4. When an image is uploaded, it is not displayed when the address information is saved. The image is not displayed when the address is submitted. 
5. Bug :Country code should be upper case for example us should be US
6. Message prompt should be displayed when sign in is unsuccessful i.e invalid password is used is incorrect or invalid email address
7. If an already existing email is used to sign up, user should be presented with a message prompt detailing the error. 
8.  (Improvement )In address book form , an asterix should be displayed for all required fields.
9. If user selects Canada as country , canadian states are not displayed in state drop down list, only USA States are listed.
10. When an address is edited, the uploaded image is not attached. It is showing "No file chosen"
11. When an address is edited, the default State "Alabama" is displayed and not the state (Louisiana) selected when the address was created
12. When trying to verify that the correct details is shown on the Edit Address page, I encountered an issue where my actual value of my assertion is blank (see screenshot attached here - fixtures/images/Screenshot 2021-08-31)
13. For the bonus points - {Create an assertion which will cause a fail (e.g. confirm there are three addresses in the list
when in fact there are two) and capture a screen-grab on fail.} When running the test, we were able to assert that there is infact 2 addresses on the list and not 3. However, I was not able to take a screen-grab of the error in the cypress window but I have attcahed a screenshot in this folder path - fixtures/images/Assertion Screenshot
The "Destroy" word should be replaced with "Delete" in the Address page