import { defineRouting } from 'next-intl/routing';
import createMiddleware from 'next-intl/middleware';

export const routing = defineRouting({
    locales: ['bn', 'en'],
    defaultLocale: 'bn'
});

export default createMiddleware(routing);

export const config = {
    matcher: ['/', '/(bn|en)/:path*']
};
