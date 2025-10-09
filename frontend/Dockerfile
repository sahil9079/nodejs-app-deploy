FROM node:18-alpine AS Builder
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm" , "start"]

FROM nginx:stable-alpine
COPY --from=Builder fronted/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80