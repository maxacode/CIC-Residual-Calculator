# All Talks

1. Proactive Security: cOnsiderations and Approaches
2. 


## Eric Docktor 23 years at AWS

- Built Fire Phone
- AWS Cryptography team - 6 years

### Builder Experience Team VP

- Oversee all builders, Service Teams, any team.
- Dec 9th 2021: Log4j
- - Paged 18k people
- - 75% out of business hours
- - 1.5 Milion manual steps taken.

## Focus areas of builder experence

1. Radically reduce the cost of manadoaty software updates
2. Elimitate routine maintenance and infrastructre build-out tasks
3. Build and adopting higher abstraction managed runtimes
4. Provide data to builders and leadership that gudies investment in automation
5. Make managing work easier
6. Create learning and career development opportunities



## Kristen Haught - 8 years

- Security assurance Orginization (3rd party Audits we use (SOC/Fedramp))
- Fincial Services (GoldMan Sachs)
- Security Tools for Builders 

## Ship software securly

- Enable teams to launch products/services on time to satisfy customers but still ensure they are secure
- "Service teams own teh security of their service, AWS Security owns the security of AWS" CJ Moses AWS CISO
- Conways Law - Minimize Social Constraints. Small Distrubted teams produce small modules architectures. 
- Retain autonomy to make decisions. 
- Builders don't exsit to serve security teams
- Security exists to make life easier for Builders and Customers. 
- Security needs to understand the teams life cycle (Setup, Develop, Build, Test, Deploy) with Security (Security Engagment, Design Review, Threat Model, Security Invariants, Design review, Pen test, Sign off, Security operations) 
- incorporated Security questions in FAQ/Initial product document. 


### Security Broad Goals

- Launch on schedule with appripiatly security
- Identify risk and fidings earlier in teh development life cycle - so it saves time in the end. 
- Reduce confusion and variation int eh review process
- 22x more interviews to hire security person vs Developer

### Security Guardians program

- Train Developer individuals on each team to undersntad AWS security
- Securuyt reviews had 22% few medium/high secerity findings in security review. 
- 26% less time to complete a security review end to end. Saving 210k days in a year. 

## How can we do it our selves

1. Identify a diverse set of Guardians and set an organzizational goals

- Variable amount of Tenure, Expereince in technology, etc

2. Ramp tehm up with skills and mentorship necessary to get them started (Data Privacy on some teams, other teams difference focus's)

3. Build a community with continual knowledge sharing

4. Measure, repprt and recognize Guardian effectiveness (Give a lot of data, dashboards to leadership, create a way to reward those Guardians)

5. Establish continues feedback mechanism with qualitiatie and quantitive data

## Tools built for Builders

- Think about the whole applicaiton lifecycle, after its in production it still needs to be managed. 
- Mechanic - Opeerators to run command on production hosts without direct access. 
- Software Assurance Services 

## Measuring Success

- "It is the goal of every security system to maximize the delivered cusotmer value while minimizing the cost of that delivery" - Eric Brandwine - Security Distinguished Engineer and VP

- Principles of measuring sucess
- - Report on metrics that relate to multipme teams
- - measure the outcome and teh cycle time
- - make sure there is a feedbackloop for the metrics
- - Absorb complexity to provide simpler metrics for your consumers
- Ask the customers (Builders) for feedback

## Builders expereince metrics

- "People respect what you inspect"
- Develop your builders
- Train and Reward teh builders



## Questions from Maks

- Need the right people to create the training material
- setup rewards no hackedEdu

## 3 Things we will learn

### Collaboration

### Build Decisions AWS Uses

### Undifferentiated Heavy Lifting


# Zero Trust in AWS - EC2, S3 Buckets, ELB/ALB. 

# Inside out Architecture. 


## Scenarios

## Zero Trust Defintion

- A Conceptual Security Model and associated set of Mechanism that focus on providng secuirty controls around digital assets that do no soley or fundamentally depend on traditional network controls or network perimeters

- Traditional Netowrk - is a moat/box around the network - once someone gets in its easy to move around and not much stopping/detecting that malicious activity

## Protect Surfaces

- Enterprise-defined data that is considered sensitive and in need of protection, the application that consumes (stores, processes, or transmits) that sensitive data, the physical and virtual asets that suppor the consumption of that sensive data, or the services that afacilitate the consumption of that data. 

### What to do with them

- Map Transaction flows > design a zero trust architecture > create control polocies > 
- DAAS - Data Application Assets and Services



### Scenario HR Applicaiton 

- EC2, RDS, S3, No internet, Direct Connect, Transit Gateay, Active Directory - On Prem, end-user devices

### Scenario Vendor Billing Application

- EKS, DynamoDB, Api Gateway, WAF, Shield, CloudFront, Internet, Identity Provider, MFA Token, End user Devices 

- 






### EC2

- Security Group (ENI) - Micro Perimetter/Programaticlaly
- IAM Roles

### RDS

### Private Link

- Access AWS Services over AWS Private BackBone
- Interact with AWS Ser thorugh private endpoint
- Can be attached to NLB - One way gateway

# Questions

 

# Action Items

- VTL - ### Scenario Vendor Billing Application EKS, DynamoDB, Api Gateway, WAF, Shield, CloudFront, Internet, Identity Provider, MFA Token, End user Devices
- Software defines permitters
- IDP - Identities defined Proxies (Lambda at CloudFront EDGE to authenticate/authorize? )
- my Identities, my resources, my networks
- Kalico can do more security on EKS. Can see more and allow more. Is very complex. (500 Level while SG's are 200 Level)