import app from './app';
import serverless from '@vendia/serverless-express';

export const handler = async (event: any, context: any, callback: any) => {
  const serverlessInstance = serverless({ app });
  return serverlessInstance(event, context, callback);
};
