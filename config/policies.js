/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

    /***************************************************************************
    *                                                                          *
    * Default policy for all controllers and actions, unless overridden.       *
    * (`true` allows public access)                                            *
    *                                                                          *
    ***************************************************************************/

    // Default policy for all controllers and actions (`true` allows public access)
    '*': true,

    // Apply the 'isLoggedIn' policy to all actions in the 'PagesController' except 'show-login'
    'PagesController': {
        '*': 'isLoggedIn',
        'showLogin': 'redirectIfLoggedIn'
    },
    // Apply the 'isLoggedIn' policy to all actions in the 'UserController' except 'login' and 'signup'
    // 'UserController': {
    //     '*': 'isLoggedIn',
    //     'login': true,
    //     'signup': true
    // }

};
