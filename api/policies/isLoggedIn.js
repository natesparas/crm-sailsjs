module.exports = async function (req, res, proceed) {
    // If `req.session.userId` is set, the user is logged in
    if (req.session.userId) {
        return proceed();
    }

    // Otherwise, the user is not logged in, redirect to login page
    return res.redirect('/login');
};
