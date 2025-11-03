FROM node:alpine 
WORKDIR /app
COPY --from=builder /app/dist ./dist
ADD package*.json ./
RUN npm ci --omit=dev
CMD [ "node", "dist/main" ] 

