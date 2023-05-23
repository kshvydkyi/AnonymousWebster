//User module
const currentUser = JSON.parse(localStorage.getItem('autorized'));

const REGISTER_URL = '/api/auth/register';
const LOGIN_URL = '/api/auth/login';
const ACTIVE_EMAIL_URL = '/api/auth/active-email/';
const RESET_PASSWORD_URL = '/api/auth/reset-password';
const RESET_PASSWORD_WT_URL = '/api/auth/reset-password/';
const UPDATE_PROFILE_DATA_URL = '/api/users/'
const GET_USER_BY_ID_URL = `/api/users/`
//Project module
const GET_FORMATS_URL = '/api/formats/'
const GET_CATEGORIES_URL = '/api/categories/'
const GET_PROJECT_URL = '/api/projects/'
const CREATE_PROJECT_URL = '/api/projects/'
const PROJECT_JSON_FOLDER = 'http://localhost:8080/projects/'
export {
    //User module
    REGISTER_URL,
    LOGIN_URL,
    ACTIVE_EMAIL_URL,
    RESET_PASSWORD_URL,
    RESET_PASSWORD_WT_URL,
    UPDATE_PROFILE_DATA_URL,
    GET_USER_BY_ID_URL,
    
    //Project module
    GET_FORMATS_URL,
    GET_CATEGORIES_URL,
    GET_PROJECT_URL,
    CREATE_PROJECT_URL,
    PROJECT_JSON_FOLDER,

}
