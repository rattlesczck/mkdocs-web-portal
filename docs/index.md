# SCM - Secure Access and Monitoring Guide for SCM Engineers

---

##  Purpose

The purpose of this document is to furnish SCM engineers with comprehensive guidance on securely accessing various resources available on the SCM platform. Additionally, it aims to provide insights into monitoring services, logs, and traces associated with the SCM platform, ensuring a secure and efficient operational environment for the engineering team.

---

> **Our discipline today = Production stability tomorrow.**  
> Empowering Access. Enabling Automation. No Manual Chaos.

---

This page outlines the access and deployment standards for all Azure environments. It ensures consistency, security, and a fully automated approach to managing cloud infrastructure.

---

##  Environment Access Made Simple

###  Read Access for All

All team members are provided with **read-only access** to Azure subscriptions, extending up to the **Production** environment.

###  Contributor Rights on Non-Prod

Team members with an **ADM account** are allowed **contributor access** to **Non-Production subscriptions**.

- No additional approvals are required.

---

##  Zero Manual Configuration Policy

Manual configuration is **strictly prohibited** across all environments (**Non-Prod** and **Prod**).

All infrastructure changes must be implemented using **Infrastructure-as-Code (IaC)** methods.

This ensures:

-  Consistency  
-  Traceability  
-  Alignment with production standards

---

##  Deployment Access Protocol

###  Test Environment Access

All team members can deploy freely to **Test environments** to support **continuous integration and testing** efforts.

---

###  Pre-Prod Deployment via Nomination

**Engineering Managers (EMs)** may nominate team members for **Pre-Prod deployments**.

---

### Production Access and Process
Only **Engineering Managers (EMs)** and **Tech Leads** are permitted to deploy to **Production environments**.

All Production deployments must follow these guidelines:

####  Change Request Required
- A **Change Request (CR)** must be raised and approved
- Must include a **RollBack Strategy**

#### Designated Deployment Windows
- **3:30 PM IST / 12:00 PM CET**
- **6:30 PM IST / 3:00 PM CET**

####  Announcement Protocol
All production deployments must be **announced in the `#SCP-Deployment` Slack channel prior to execution**.


---

## Resource Table

| S. No. | Type      | Resource                    | Link                                      |
|--------|-------------------------|-----------------------------------------------------------|------------------------------------------------------------------|
| 1      | Repository     | GITHUB Repository     | [SCM-GitHub Repository Creation](https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182499347034)                    |
| 2      | Cloud Access     | PIM                 | [Admiral PIM Grant](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/admiral-pim-grant.yml)                      |
| 3      | App Restart       | Azure WebApp Function App  | [GH - App Restart YAML](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/restart-webapp-functionapp.yml)                             |
| 4      | POD Restart   | AKS Pods                | [GH - Restart Pods](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/k8s-stop-start-pods.yml)                      |
| 5      | PG Server Restart     | PG Server Restart             | [GH - PG Restart](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/restart-pg-server-flexi.yml)           |
| 6      | Access  | Secure Gateway Whitelisting        | [GH - Access](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/app-service-firewall-update.yml)  
| 7      | Access  | DB Access Management        | [GH - DB Access](https://github.com/Maersk-Global/scm-central-database-management/actions/workflows/database_access.yml)  
| 8      | Access  | Storage Account Firewall        | [GH - STA Update](https://github.com/Maersk-Global/scm-central-pipeline-templates/actions/workflows/STA-Firewal-Update.yml)  
| 9      | Access  | Storage Account Access         | [GH - SAS-STG-Token](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/azure-generate-sas-stg-token.yml)                |
| 10      | RETINA Secrets     | HashiCorp Vault     | [Fetching Kafka Details from HashiCorp](https://docs.retina.maersk.io/connect/secrets_from_vault)<br>[Create-User](https://docs.retina.maersk.io/selfservice/onboarding/shared_cluster/create_user/) |
| 11      | RETINA Secrets  | Migration from HashiCorp to KeyVault    | [GH - HashiCorp to KeyVault](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/hashicorp_vault_Azure_Migrate.yml)                |
| 12     | Monitoring     | Grafana Dashboard Catalog     | [Grafana](https://grafana.maersk.io/d/scm-dashboard-catalog/scm-dashboard-catalog?orgId=1&from=now-6h&to=now&timezone=browser&refresh=5m) |
| 13      | DB Script Execution     | Execute SQL and PGSQL Scripts     | [GH - DB Scripts](https://github.com/Maersk-Global/scm-central-gitops/actions/workflows/execute-db-scripts.yml) |
| 14      | K8s Cluster     | AKS    | [Confluence - SCM K8s](https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/181557430538) |

---
