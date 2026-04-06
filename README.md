# syncbot-aut0-vault
syncBot is an autonomous AI technical project manager. It securely reads your recent GitHub commits, cross references your context, and autonomously schedules sprint review meetings in Google Calendar with a summarized agenda based on your actual code changes.
# SyncBot - The Cross-Platform Context Assistant 

Built for the **Agentic AI app with Auth0 Hackathon**.

SyncBot is an autonomous AI technical project manager. It securely reads your recent GitHub commits, cross-references your context, and autonomously schedules sprint review meetings in Google Calendar with a summarized agenda based on your actual code changes.

The core of this project demonstrates the power of **Auth0 Token Vault**, allowing the AI agent to act *on behalf of the user* across multiple third-party APIs (GitHub and Google) without ever storing sensitive refresh tokens in a local database.

##  Key Features

* **Auth0 Token Vault Integration:** Securely manages third-party Oauth tokens (GitHub and Google) using the On-Behalf-Of (OBO) pattern.
* **Agentic AI Workflow:** Utilizes the Vercel AI SDK to stream responses and execute multi-step tool calls autonomously.
* **GitHub Context Tool:** Connects to GitHub to fetch recent commits and code changes from a specified repository.
* **Google Calendar Tool:** Automatically drafts an agenda from code changes and schedules a meeting on the user's primary calendar.
* **Modern Stack:** Built on Next.js App Router for a seamless blend of UI and secure backend API routes.

##  Tech Stack

* **Framework:** Next.js (App Router)
* **Authentication:** Auth0 (`@auth0/nextjs-auth0`) + **Auth0 Token Vault**
* **AI Orchestration:** Vercel AI SDK
* **LLM Provider:** OpenAI / Anthropic (Configurable)
* **External APIs:** GitHub REST API, Google Calendar API v3

##  Local Development Setup
