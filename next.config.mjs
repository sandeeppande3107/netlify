/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'x-custom-header',
                value: 'my custom header value',
              },
              {
                key: 'x-another-custom-header',
                value: 'my other custom header value',
              },
              {
                key: 'x-another-custom-header',
                value: 'my other custom header value',
              },
              {
                key: 'netlify-vary',
                value: 'query'
              }
            ],
          },
          {
            source: '/server',
            headers: [
              {
                key: 'x-another-custom-header-server',
                value: 'my other custom header value',
              },
              {
                key: 'netlify-vary',
                value: 'query'
              }
            ],
          },
        ]
      },
};

export default nextConfig;
