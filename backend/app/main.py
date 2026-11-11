from fastapi import FastAPI

app = FastAPI(title="Databees Migration API", version="0.1.0")

@app.get("/health")
def health():
    return {"status": "ok", "service": "databees-migration-api"}
