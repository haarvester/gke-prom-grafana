1. GKE установил вручную. Но у меня есть записи двухгодичной давности где я ставил через terraform. https://www.youtube.com/watch?v=bCCOPuJSY7s
2. Установил nginx-ingress-controller. 
3. Prometheus и Grafana установил при помощи helm.
4. Настроил ингресс для Grafana. Чтобы использовать nginx-ingress использовал аннотацию
5. Написал сервис который возвращает разные роуты и настроил отправку метрик. App.js
6. Cконфигурировал конфиг Prometheus для скрепинга /metrics сервиса.
7. Настроил дашборд и алерт, когда запросы для роута /error будут превышать 10% от общего запроса сработает Alert
sum(rate(route_requests_total{job="myapp", route="/error"}[5m])) / sum(rate(route_requests_total{job="myapp"}[5m])) > 0.1 
8. Для нагрузки написал скрипт на python. loadtest.py