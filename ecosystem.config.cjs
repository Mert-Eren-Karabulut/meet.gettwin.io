module.exports = {
    apps: [
        {
            name: 'meet-gettwin',
            cwd: '/home/gettwin-meet/htdocs/meet.gettwin.io',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};