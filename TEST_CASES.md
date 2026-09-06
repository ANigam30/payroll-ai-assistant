# Test Cases

## 1. Start Application

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 2. Health API

```
GET /api/health
```

Expected:

- Status 200

---

## 3. Payroll API

```
GET /api/payroll/me
```

Expected:

- Employee payroll details are returned.

---

## 4. Upload Payslip

```
POST /api/payslip/upload
```

Expected:

- PDF uploaded successfully.

---

## 5. Ask AI

```
POST /api/assistant/ask
```

Sample Question

```
How much HRA did I receive?
```

Current Status

- AI integration is completed.
- Testing could not be completed because the provided API token returned **401 Unauthorized**.

---

## 6. Tax Simulation

```
POST /api/tax/simulate
```

Input

```json
{
  "section80CInvestment": 50000
}
```

Expected

Estimated tax saving is returned.

---

## Basic Edge Cases

- Upload without PDF
- Empty question
- Invalid employee id
- Invalid API token