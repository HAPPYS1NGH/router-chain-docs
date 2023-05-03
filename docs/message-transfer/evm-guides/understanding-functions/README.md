# EVM Chain CrossTalk Functions

Router’s Gateway contracts have a function named **`iSend`** that facilitates the transmission of a cross-chain message. Whenever users want to execute a cross-chain request, they can call this function by passing the payload to be transferred from the source to the destination chain along with the required parameters.

In addition to calling the aforementioned function, CrossTalk users will also have to implement two functions on their contracts:

1. To handle a cross-chain request on the destination chain, users are required to include a **`iReceive`** function on their destination chain contracts.
2. To process the acknowledgment of their requests on the source chain, user will have to implement a **`iAck`** function on their source chain contracts.
