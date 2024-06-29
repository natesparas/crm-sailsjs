module.exports = {
    showHome: async function (req, res) {
        return res.view('pages/homepage', {
            page: 'login'
        });
    },

    showLogin: async function (req, res) {
        return res.view('pages/auth/login', {
            page: 'login'
        });
    }
};
