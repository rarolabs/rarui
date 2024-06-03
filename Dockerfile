FROM node:20-alpine
WORKDIR /app
COPY package* .
COPY yarn* .
RUN yarn set version 4.0.2
RUN yarn install
COPY . .
# RUN yarn workspace @rarui-react/components run storybook:build
# RUN mv storybook-static/ rarui-react-storybook/
# COPY packages/implementations/react/packages*.json .
# COPY packages/implementations/react/yarn* .
# COPY packages/implementations/react/ .
# RUN yarn install
# RUN yarn workspace @rarui-react/components run storybook:build