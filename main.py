import os
import json

with open("images.json", "r") as fp:
    data = json.load(fp)

def downloadImage(item, user):
    cmd = "wget -O " + user + str(item) + ".jpeg " + "'" + data[item] + "'"
    os.system(cmd)

def downloadAll(user):
    for i in range(len(data)-1):
        downloadImage(i+1, user)