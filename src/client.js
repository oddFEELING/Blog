import client from '@sanity/client';

export default client({
  projectId: 'l55n845z',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-27',
});
