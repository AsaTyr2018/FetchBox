from fastapi import FastAPI

app = FastAPI(title="FetchBox")


@app.get("/")
async def root():
    return {"message": "Welcome to FetchBox"}
