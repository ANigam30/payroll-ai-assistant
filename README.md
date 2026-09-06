# Payroll AI Assistant

## Overview

Payroll AI Assistant is a simple application that helps employees understand their payroll information.

The application allows users to:

- Upload a payslip (PDF)
- View payroll details
- Ask payroll related questions
- Estimate tax savings
- View investment proof checklist

The project uses mock payroll data for demonstration.

---

## Features

- Upload payslip
- View payroll details
- Ask payroll related questions
- Tax saving simulation
- Investment proof checklist
- Mock authentication

---

## Tech Stack

- Node.js
- Express.js
- HTML
- CSS
- JavaScript

---

## Project Structure

```
payroll-ai-assistant
│
├── docs
├── mock-data
├── public
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   └── server.js
│
├── uploads
├── README.md
├── TEST_CASES.md
├── .env.example
└── package.json
```

---

## Architecture

Architecture diagram is available in:

```
docs/architecture.png
```

---

## APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/health | Health check |
| GET | /api/payroll/me | Get employee payroll |
| POST | /api/payslip/upload | Upload payslip |
| POST | /api/assistant/ask | Ask payroll questions |
| POST | /api/tax/simulate | Tax saving calculation |

---

## Setup

Clone the project

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
LLM_API_URL=<API_URL>
LLM_API_TOKEN=<API_TOKEN>
```

Start the application

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## Assumptions

- Payroll data is mocked.
- OCR is simulated.
- Authentication is simulated.
- Tax calculation uses simple assumptions.

---

## Notes

The AI integration is implemented using the provided LLM Wrapper API.

During testing, the provided API token returned **401 Unauthorized**, so AI responses could not be verified.

---

## Future Improvements

- JWT authentication
- Database
- OCR integration
- Better tax calculation
- Multi-user support
