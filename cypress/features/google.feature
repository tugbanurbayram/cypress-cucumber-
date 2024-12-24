Feature: Framework Test

    Scenario: Google Search Bar
        Given user navigates to "https://www.google.com/"
        When user search for "Tesla"
        Then user should see "Tesla" in the URL
        And user should see "Tesla" in the title

# # Scenario: Navigate to Frontend
#     Given user navigates to "https://www.techglobal-training.com/frontend"
#     When clicks on the 'Register' button
#     Then user should see the message
#     And validate the message is 'You clicked on "Register"'