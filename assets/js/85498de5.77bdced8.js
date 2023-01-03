"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[1721],{15800:e=>{e.exports=JSON.parse('{"pluginId":"crosstalk","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/crosstalk/","docId":"README"},{"type":"link","label":"Overview","href":"/crosstalk/overview","docId":"overview"},{"type":"category","label":"Understanding CrossTalk","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"requestToDest","href":"/crosstalk/understanding-crosstalk/requestToDest","docId":"understanding-crosstalk/requestToDest"},{"type":"link","label":"handleRequestFromSource","href":"/crosstalk/understanding-crosstalk/handleRequestFromSource","docId":"understanding-crosstalk/handleRequestFromSource"},{"type":"link","label":"handleCrossTalkAck","href":"/crosstalk/understanding-crosstalk/handleCrossTalkAck","docId":"understanding-crosstalk/handleCrossTalkAck"},{"type":"link","label":"Chain Types","href":"/crosstalk/understanding-crosstalk/chainTypes","docId":"understanding-crosstalk/chainTypes"}],"href":"/crosstalk/understanding-crosstalk/"},{"type":"category","label":"Different Types of Requests","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Single Call without Acknowledgment","href":"/crosstalk/different-types-of-requests/single-call-without-ack","docId":"different-types-of-requests/single-call-without-ack"},{"type":"link","label":"Single Call with Acknowledgment","href":"/crosstalk/different-types-of-requests/single-call-with-ack","docId":"different-types-of-requests/single-call-with-ack"},{"type":"link","label":"Multiple Calls without Acknowledgment","href":"/crosstalk/different-types-of-requests/multiple-calls-without-ack","docId":"different-types-of-requests/multiple-calls-without-ack"},{"type":"link","label":"Multiple Calls with Acknowledgment","href":"/crosstalk/different-types-of-requests/multiple-calls-with-ack","docId":"different-types-of-requests/multiple-calls-with-ack"}],"href":"/crosstalk/different-types-of-requests/"},{"type":"category","label":"CrossTalk Utils Library","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How to Use the CrossTalkUtils Library","href":"/crosstalk/crosstalkutils-library/how-to-use-the-crosstalkutils-library","docId":"crosstalkutils-library/how-to-use-the-crosstalkutils-library"},{"type":"link","label":"Helper Functions","href":"/crosstalk/crosstalkutils-library/helper-functions","docId":"crosstalkutils-library/helper-functions"}],"href":"/crosstalk/crosstalkutils-library/"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cross-chain Ping Pong","href":"/crosstalk/guides/ping-pong-contract","docId":"guides/ping-pong-contract"},{"type":"link","label":"Cross-chain NFT (ERC-1155)","href":"/crosstalk/guides/cross-chain-nft/","docId":"guides/cross-chain-nft/README"}],"href":"/crosstalk/category/guides"}]},"docs":{"crosstalkutils-library/helper-functions":{"id":"crosstalkutils-library/helper-functions","title":"Helper Functions","description":"toBytes","sidebar":"tutorialSidebar"},"crosstalkutils-library/how-to-use-the-crosstalkutils-library":{"id":"crosstalkutils-library/how-to-use-the-crosstalkutils-library","title":"How to Use the CrossTalkUtils Library","description":"1) Import the CrossTalkUtils library in your Contract","sidebar":"tutorialSidebar"},"crosstalkutils-library/README":{"id":"crosstalkutils-library/README","title":"CrossTalkUtils Library","description":"To make it easy to integrate Router CrossTalk in your contracts, we have created a CrossTalkUtils plug-and-play library. It gives you the following functionalities:","sidebar":"tutorialSidebar"},"different-types-of-requests/multiple-calls-with-ack":{"id":"different-types-of-requests/multiple-calls-with-ack","title":"Multiple Calls with Acknowledgment","description":"Consider an application that allows users to send multiple messages (pings) from the source chain and receive a message in response (pong) to all those messages from the destination chain. In this case, the requirements are as follows:","sidebar":"tutorialSidebar"},"different-types-of-requests/multiple-calls-without-ack":{"id":"different-types-of-requests/multiple-calls-without-ack","title":"Multiple Calls without Acknowledgment","description":"Consider an application that allows users to transfer multiple ERC20 tokens or messages from one chain to another in the same cross-chain request. In this case, the requirements are as follows:","sidebar":"tutorialSidebar"},"different-types-of-requests/README":{"id":"different-types-of-requests/README","title":"Different Types of Request","description":"As mentioned in the previous section, Router CrossTalk can be used to create cross-chain requests with multiple payloads and handle those payloads on their respective destination chain contracts. Users can also opt to receive acknowledgment of their requests on the source chain. Depending on the number of calls in a single cross-chain request as well as the users\' preference to receive an acknowledgment, CrossTalk requests can be classified into four types:","sidebar":"tutorialSidebar"},"different-types-of-requests/single-call-with-ack":{"id":"different-types-of-requests/single-call-with-ack","title":"Single Call with Acknowledgment","description":"Consider an application that allows users to send a message (ping) from the source chain and receive a message in response (pong) from the destination chain. In this case, the requirements are as follows:","sidebar":"tutorialSidebar"},"different-types-of-requests/single-call-without-ack":{"id":"different-types-of-requests/single-call-without-ack","title":"Single Call without Acknowledgment","description":"Consider an application that allows users to transfer their ERC20 tokens from one chain to another. In this case, the requirements are as follows:","sidebar":"tutorialSidebar"},"guides/cross-chain-nft/README":{"id":"guides/cross-chain-nft/README","title":"Cross-chain NFT (ERC-1155)","description":"A sample ERC-1155 contract using Router CrossTalk","sidebar":"tutorialSidebar"},"guides/ping-pong-contract":{"id":"guides/ping-pong-contract","title":"Cross-chain Ping Pong","description":"A simple ping pong contract using Router CrossTalk","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"Background","sidebar":"tutorialSidebar"},"README":{"id":"README","title":"Introduction","description":"The guides on this page will explain the process of developing on Router\'s CrossTalk framework.","sidebar":"tutorialSidebar"},"understanding-crosstalk/chainTypes":{"id":"understanding-crosstalk/chainTypes","title":"Chain Types","description":"| Chain Type | Value |","sidebar":"tutorialSidebar"},"understanding-crosstalk/handleCrossTalkAck":{"id":"understanding-crosstalk/handleCrossTalkAck","title":"handleCrossTalkAck","description":"Once the handleRequestFromSource function is executed, an acknowledgment is generated from Router\'s destination chain Gateway contract, which will specify whether the calls were successful. Since we inherited the ICrossTalkApplication contract, we need to implement a handleCrossTalkAck function in our contract with the following schema.","sidebar":"tutorialSidebar"},"understanding-crosstalk/handleRequestFromSource":{"id":"understanding-crosstalk/handleRequestFromSource","title":"handleRequestFromSource","description":"The cross-chain request initiated from the source chain will deliver the payload to the destination contract address specified in the contractCalls parameter. On the destination contract, a function needs to be implemented to handle this payload:","sidebar":"tutorialSidebar"},"understanding-crosstalk/README":{"id":"understanding-crosstalk/README","title":"Understanding CrossTalk","description":"Router\u2019s Gateway contracts have a function named requestToDest that facilitates the transmission of a cross-chain message. Whenever users want to execute a cross-chain request, they can call this function by passing the payload to be transferred from the source to the destination chain along with the required parameters.","sidebar":"tutorialSidebar"},"understanding-crosstalk/requestToDest":{"id":"understanding-crosstalk/requestToDest","title":"requestToDest","description":"By setting the parameters per their requirements, users can use this function to exercise a wide range of functionalities when it comes to cross-chain message passing. These parameters include:","sidebar":"tutorialSidebar"}}}')}}]);