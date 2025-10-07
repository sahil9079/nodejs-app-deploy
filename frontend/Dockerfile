FROM node:18-alpine AS Builder
WORKDIR /app
COPY . .
RUN cd fronted && npm install && npm run scripts

FROM nginx:stable-alpine
COPY --from==Builder fronted/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80