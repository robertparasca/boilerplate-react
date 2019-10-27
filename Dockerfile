FROM node:12.2.0-alpine as react-build
WORKDIR /app
COPY . /app
RUN npm install --silent
CMD ["npm", "run", "build"]

FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]