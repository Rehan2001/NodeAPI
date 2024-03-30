FROM node:16-alpine  

WORKDIR C:\Users\rehan\Downloads\Compressed\hello-node\hello-node

COPY package*.json ./  

RUN npm install  

COPY . .  

EXPOSE 3000  

CMD ["node", "main.js"]  
