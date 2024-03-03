from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hello_world():
    return {"message": "Hello World"}


@app.get("/hello")
def hello_world():
    return {"message": "Hello World 2"}