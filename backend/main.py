from fastapi import FastAPI, HTTPException, Depends, status
from typing import Annotated, TypeAlias
from sqlmodel import Session, SQLModel, create_engine, select

from models import Coffee

app = FastAPI()

sqlite_file_name = "coffee.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep: TypeAlias = Annotated[Session, Depends(get_session)]

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# START WRITING YOUR CODE HERE!


# Stuff to run our server :P
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
