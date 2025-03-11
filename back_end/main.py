
import api as api
import variables as var

#api.format_response()
response = api.send_request(var.api_links[0],1)
print(type(response))
#api.format_response(response)
print(response["results"][0]["url"])
#print(response["results"][0]["url"][])
bulbasaur_data = api.send_request(response["results"][0]["url"],1)
bulbasaur_sprite = api.send_request(bulbasaur_data["sprites"]["front_default"],2)

#print(bulbasaur_data["sprites"]["front_default"])
api.format_response(bulbasaur_data["sprites"])

#api.format_response(bulbasaur_data)
print(bulbasaur_sprite)





