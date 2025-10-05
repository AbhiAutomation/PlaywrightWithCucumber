Feature: Ecomorece validation 
Scenario: Placing theorder 
Given a Login to Ecomrcs application  with "username" and  "pass" 
When Add "Zara Coat 3" to  Cart 
Then Verify "Zara Coat 3" is displayedd in the Cart  
When Enter the valid details and place order 
Then  Verify Order Histroy page 
