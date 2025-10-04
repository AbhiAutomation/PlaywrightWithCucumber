Feature: Ecomorece validation 
Scenario: Placing theorder 
Given a Login to Ecomrcs application  with "aks.igec@gmail.com" and  "Ashish@1234" 
When Add "Zara Coat 3" to  Cart 
Then Verify "Zara Coat 3" is displayedd in the Cart  
When Enter the valid details and place order 
Then  Verify Order Histroy page 
