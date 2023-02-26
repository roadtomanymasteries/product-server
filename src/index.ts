import app from './app';
import serverless from '@vendia/serverless-express';

export const handler = async (event: any, context: any, callback: any) => {
  const slashIndex = event.path.indexOf('/', 1);
  event.path = event.path.substring(slashIndex);

  const serverlessInstance = serverless({ app });
  return serverlessInstance(event, context, callback);
};
