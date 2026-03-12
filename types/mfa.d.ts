export interface MFA {
    email: 0 | 1;
    sms: 0 | 1;
    authenticatorApp: 0 | 1;
}

export interface MFASession {
    mfa: MFA;
    showAuthenticator: boolean;
}