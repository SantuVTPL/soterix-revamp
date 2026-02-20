const API_BASE = process.env.API_SERVER_PROTOCOL + "://" + process.env.API_SERVER_IP + ':' + process.env.API_SERVER_PORT
const PREFIX = '/v-apiserver/REST'

export const API = {
    // Auth
    LOGIN: `${API_BASE}${PREFIX}/central/user/login`,

    // User
    USER: `${API_BASE}${PREFIX}/central/user/session/details`,
}