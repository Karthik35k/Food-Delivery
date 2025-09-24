# filepath: D:\Docker workbook sapce\frontend\Dockerfile
FROM node:16
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]