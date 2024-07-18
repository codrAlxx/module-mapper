import fastapi
import uvicorn
import PythonScript
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:3001"]

app = fastapi.FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/process-all/")
async def process_all(dir_path: str = None):
    print(dir_path if dir_path else "No Directory path")
    if not dir_path:
        raise fastapi.HTTPException(status_code=400, detail="No Directory Path")

    msg = PythonScript.read_directory(dir_path)
    return {"message": msg if msg else "Directory processed"}

if __name__ == "__main__":
   uvicorn.run("api_endpoints:app", host="127.0.0.1", port=8090, reload=True)