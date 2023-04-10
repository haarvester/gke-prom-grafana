import time
import requests

routes = ['/', '/notfound', '/error', '/success']

while True:
    for route in routes:
        response = requests.get(f'http://test.gps-watch.kz{route}')
        print(f'Response from {route}: {response.status_code}')
    time.sleep(1)
