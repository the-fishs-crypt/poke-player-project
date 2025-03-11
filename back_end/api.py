from os import X_OK
import requests
import json
import variables as var
#===================================   data   ======================================
x = "="


def format_response(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


def cntr(x):
    print(x.center(50, x))


def return_status_code(obj):
    print(obj.status_code)


def send_request(http_link,x):
    match x:
        case 1:
            return requests.get(http_link).json()
        case 2:
            return requests.get(http_link)


#==================           main          ===========================
