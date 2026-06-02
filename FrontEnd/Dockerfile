FROM node:20-alpine AS build 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 
## FINAL STAGE ###
FROM nginx:alpine
WORKDIR /app
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


