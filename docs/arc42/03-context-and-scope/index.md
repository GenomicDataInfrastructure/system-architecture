---
title: "3. Context and scope"
sidebar_label: "3. Context and scope"
sidebar_position: 3
slug: /context
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Kjell Petersen (UiB)", "Dylan Spalding (CSC)"]
status: draft
wave: 2
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: []
last_reviewed:
---

<InShort>

- The Genome EDIC system is the services that the Genome EDIC and the Genome EDIC Member Countries run, and the organisations that run those services or take decisions in them, such as the national coordination points and the 1+MG Data Holders that decide on access.
- Outside it are, among others, Users and their organisations, data subjects, the systems that supply the data, and the European network HealthData@EU.
- Responsibility doesn't stop at the system boundary: a User Organisation, for example, is responsible for what its Users do, but is outside the system. 3.3 describes these responsibilities; it is our addition to the arc42 template.

</InShort>

## Inside and outside

Inside the [Genome EDIC system](/glossary#genome-edic-system) are the European and national services, and the organisations that run those services or take decisions in them. For example, the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) runs the central services, the [1+MG NCPs](/glossary#1mg-national-coordination-point-1mg-ncp) run the national nodes, and the [1+MG Data Holders](/glossary#1mg-data-holder) decide on access to their datasets.

Outside are the people, organisations and systems it deals with. Among them are [User Organisations](/glossary#user-organisation) and their [Users](/glossary#user), and [data subjects](/glossary#data-subject). The [1+MG Data Providers](/glossary#1mg-data-provider) take part in the framework, but the source systems their data come from are outside. So is [HealthData@EU](/glossary#healthdataeu), the network of the European Health Data Space (<Acronym id="EHDS" />) for cross-border access to health data. [3.1 Business context](/context/business) draws the boundary and lists every partner. The laws and rules that limit the system are in [chapter 2](/constraints).

arc42, the documentation template this architecture follows, describes the context as business context (what each partner exchanges with the system) and, where needed, as technical context (through which channels) <Cite id="arc42" />. This chapter adds a third view: the three scopes of responsibility, European, national and User Organisation. The three pages answer different questions; a scope is not the same as being inside the system.

## Pages in this chapter

- [3.1 Business context](/context/business): what is inside the system and what is outside, and what each partner sends to it and receives from it.
- [3.2 Technical context](/context/technical): which channel, protocol and standard each exchange of 3.1 uses.
- [3.3 European, national and User Organisation scopes](/context/scopes): who is responsible for what, which actor belongs to which scope, how the type of a dataset decides who takes the access decision (a 1+MG Data Holder in the country, or the [Genome EDIC](/glossary#genome-edic)), and how to read chapters 5 to 7.
