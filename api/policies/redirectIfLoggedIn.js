module.exports = async function (req, res, proceed) {
    // If `req.session.userId` is set, redirect to homepage
    if (req.session.userId) {
        return res.redirect('/');
    }

    // Otherwise, the user is not logged in, proceed to login page
    return proceed();
};
