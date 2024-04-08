import requests

# By name
api_url = "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/jumanji"

# By IGN and tagline
api_url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/jumanji/xdd"

api_key = "RGAPI-b13d3b48-5f04-4f56-b7fe-cf1424b2523f"
api_full_url = api_url + "?api_key=" + api_key

resp = requests.get(api_full_url)
player_info = resp.json()

puuid = player_info['puuid']
# accountId = player_info['accountId']
# print(player_info)
# print(puuid)

#ACCOUNT V1
def accountByPUUID(puuid):
    url = f"https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/{puuid}?api_key={api_key}"
    return requests.get(url).json()

def accountByRiotID(gameName, tagLine):
    url = f"https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}?api_key={api_key}"
    return requests.get(url).json()

#SUMMONER V4
def summonerByPUUID(puuid):
    url = f"https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{puuid}?api_key={api_key}"
    return requests.get(url).json()

#LEAGUE V4
def getRankBySummonerID(summonerID):
    url = f"https://oc1.api.riotgames.com/lol/league/v4/entries/by-summoner/{summonerID}?api_key={api_key}"
    return requests.get(url).json()

#CHAMPION-MASTERY-V4
# print(accountByPUUID("0cDYLIi3eHfNpHKkQ3DIxDDkfBdh9GGxSb8Qe9rXmU6dFieCeAM-mdwHUS237nSq5ymXwaUnnUZ1Pw"))
# print(accountByRiotID("jumanji","xdd"))
puuid = accountByRiotID("meiji","0178")['puuid']
summonerID = summonerByPUUID(puuid)['id']
profileIconId = summonerByPUUID(puuid)['profileIconId']
rank = getRankBySummonerID(summonerID)
print(puuid)
print(summonerID)
print(rank)
print(profileIconId)