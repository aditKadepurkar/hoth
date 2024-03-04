from fastapi import FastAPI
from pydantic import BaseModel
from tinydb import TinyDB, Query, where


db = TinyDB('/Users/aditkadepurkar/hoth/api/db.json')


class User(BaseModel):
    userExists: bool = True
    name: str
    uid: int 
    username: str
    password: str
    friendList: dict = {}
    friendRequests: dict = {}
    currloc: str = ""
    doing: str
    isLive: bool
    # gps



app = FastAPI()

app.userList = {}
app.currentFreeUID = 0



@app.post("/createUser")
def createUser(newName: str, newUsername: str, newPassword: str):
    #uid generating function
    t = 0
    try:
        t = len(db)
    except:
        t = 0
    #db.insert({'name' : newName})
    #db.insert({'name': newName, 'uid' : t, 'username' : newUsername, 'pw' : newPassword, 'fr' : {}, 'fl' : {}, 'cl' : str, 'isLive': bool, 'doing' : str, 'photo' : str})
    j = {'name': newName, 'uid' : t, 
         'username' : newUsername, 'pw' : newPassword, 'fr' : {}, 
         'fl' : {}, 'cl' : "", 'isLive': False, 'doing' : "", 'photo' : ""}
    db.insert(j)

    #tempUser = User(name = newName, uid = app.currentFreeUID, username = newUsername, password = newPassword)
    #app.userList[len(app.userList)] = tempUser;
    

@app.post("/deleteUser")
async def deleteUser(uidToDelete: int):
    d = Query()
    db.remove(d.uid == uidToDelete)


@app.post("/checkPassword")
async def checkPassword(pwdUID: int, pwd: str):
    user = Query()
    if (db.all()[pwdUID]['pw'] == pwd):
        return True
    return False

@app.post("/status")
async def status(uid: int, s: bool, doing: str = ""):
    
    doc = Query().uid == uid;
    db.update({'isLive' : s}, doc)
    db.update({'doing' : doing}, doc)


@app.post("/addFriend")
def addFriend(myUID: int, friendUID: int):
    fl = db.all()[myUID]['fl'] 
    fl[friendUID] = friendUID;
    doc = Query().uid == myUID;
    #result = db.search(doc)
    db.update({'fl' : fl}, doc)

    fl = db.all()[friendUID]['fl'] 
    fl[myUID] = myUID
    doc = Query().uid == friendUID;
    db.update({'fl' : fl}, doc)

    return {"State" : "Friend Added!"}

@app.post("/requestFriend")
async def requestFriend(myUID: int, friendUID: int):
    row = Query().uid = friendUID;
    if (myUID in db.all()[friendUID]['fr']):
        return {"State": "You have already sent a request."}
    doc = Query().uid == friendUID;
    fr = db.all()[friendUID]['fr'] 
    fr[myUID] = myUID
    
    db.update({'fr' : fr}, doc)
    return {"State": "Friend request sent!"}

@app.post("/acceptRequest")
async def acceptRequest(myUID: int, fUID: int):
    addFriend(myUID, fUID);
    fr = db.all()[myUID]['fr'] 
    fr.pop(str(fUID))
    doc = Query().uid == myUID;
    db.update({'fr' : fr}, doc)

    return {"State": "Success! Friend added"}

@app.post("/deleteRequest")
async def deleteRequest(myUID: int, fUID: int):
    fr = db.all()[myUID]['fr'] 
    fr.pop(str(fUID))
    doc = Query().uid == myUID;
    db.update({'fr' : fr}, doc)
    return {"State": "Friend request deleted."}

@app.post("/clearLocationLive")
async def clearL(id: int):
    doc = Query().uid == id;
    db.update({'cl' : ""}, doc)
    db.update({'isLive' : False}, doc)

@app.post("/setLive")
async def setLive(id: int, s: bool):
    doc = Query().uid == id;
    db.update({'isLive' : s}, doc)

@app.post("/updateL")
async def updateL(id: int, l: str):
    doc = Query().uid == id;
    db.update({'cl' : l}, doc)

@app.post("/deleteFriend")
async def deleteFriend(myUID: int, fUID: int):
    fl = db.all()[myUID]['fl'] 
    if not (str(fUID) in fl):
        return {"State": "Friend not in list."}
    fl.pop(str(fUID));
    doc = Query().uid == myUID;
    db.update({'fl' : fl}, doc)


    fl = db.all()[fUID]['fl'] 
    fl.pop(str(myUID));
    doc = Query().uid == fUID;
    db.update({'fl' : fl}, doc)

    return {"State": "Friend deleted."}


@app.get("/getFriendReqList")
async def getFriendReqList(UID: int):
    return db.all()[UID]['fr'] 



@app.post("/login")
async def login(l1:str, pw:str):
    l = list(l1.split("#"))
    try:
        p = db.all()[int(l[1])]
    except:
        return {False}
    if p == None:
        return False
    #return l
    if (p['pw'] == pw) and (p['username'] == l[0]):
        return True
    return False


@app.get("/getUserList")
async def getUserList():
    return db.all()

