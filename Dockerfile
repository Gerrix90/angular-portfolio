FROM node

WORKDIR /angularjs-portfolio

COPY ./angularjs-portfolio /angularjs-portfolio
RUN npm i
RUN npm i -g serve

EXPOSE 5001

CMD serve --port=5001 -s . && /bin/bash
