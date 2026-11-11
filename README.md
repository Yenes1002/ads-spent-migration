# Databees Migration Tool
Internal migration utility.

## Stack
- Frontend: React + Vite
- Backend: FastAPI
- Hosting: Render
- Database: Supabase (backend only)

## Local development
Backend:
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Security
Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Render environment variables only. Never commit secrets or expose the service-role key in frontend code.
