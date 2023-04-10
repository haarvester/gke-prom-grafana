FROM node:14

# Установка зависимостей
WORKDIR /app
COPY package.json .
RUN npm install --only=prod

# Копирование кода приложения
COPY app.js .

# Команда запуска приложения
CMD ["node", "app.js"]
