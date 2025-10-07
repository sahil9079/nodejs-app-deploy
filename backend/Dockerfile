FROM node:18-alpine 
WORKDIR /app
COPY . .
RUN cd backend
RUN npm install
RUN npm run scripts
EXPOSE 5000